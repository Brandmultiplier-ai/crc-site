import { expect, test, type Page } from "@playwright/test";

const ORIGINAL_URL = process.env.ORIGINAL_URL;
const SHOTS_DIR = "test-results/visual";

const VIEWPORTS = [360, 390, 430, 768, 1024, 1280, 1440];

const PAGES = [
  { name: "home", path: "/" },
  { name: "work", path: "/work/" },
  { name: "case-ledger", path: "/work/ledger/" },
  { name: "case-hard-rock", path: "/work/hard-rock-cafe/" },
  { name: "case-rebrief", path: "/work/google-project-rebrief/" },
  { name: "case-intel", path: "/work/intel/" },
  { name: "about", path: "/about/" },
  { name: "writing", path: "/writing/" },
  { name: "contact", path: "/contact/" },
  { name: "pitchcraft", path: "/pitchcraft/" },
  { name: "essay-frameworks", path: "/7-brand-strategy-frameworks-that-drive-business-growth/" },
  { name: "essay-move", path: "/why-some-brands-move-us/" },
  { name: "legal-privacy", path: "/privacy-policy-2/" },
];

/** Dismisses the consent banner and waits for web fonts, so captures are stable. */
async function prepare(page: Page, url: string) {
  await page.addInitScript(() => localStorage.setItem("crc_consent", "denied"));
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
}

for (const width of VIEWPORTS) {
  test.describe(`${width}px`, () => {
    test.use({ viewport: { width, height: 900 } });

    for (const { name, path } of PAGES) {
      test(`${name} has no horizontal overflow`, async ({ page }) => {
        await prepare(page, path);
        const overflow = await page.evaluate(() => {
          const viewport = document.documentElement.clientWidth;
          const offenders = [...document.querySelectorAll<HTMLElement>("body *")]
            .filter((el) => {
              // Horizontal scrollers clip their own content; only escapes from the page matter.
              if (el.closest("[class*='overflow-x-auto'], [class*='overflow-hidden']"))
                return false;
              const { right } = el.getBoundingClientRect();
              return right > viewport + 1;
            })
            .slice(0, 5)
            .map((el) => `${el.tagName.toLowerCase()}.${el.className.toString().slice(0, 60)}`);
          return { scrollWidth: document.documentElement.scrollWidth, viewport, offenders };
        });
        expect(overflow.offenders, `elements wider than the ${width}px viewport`).toEqual([]);
        expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.viewport);

        await page.screenshot({
          path: `${SHOTS_DIR}/${name}-${width}-new.png`,
          fullPage: true,
          animations: "disabled",
        });
        if (ORIGINAL_URL) {
          const original = await page.context().newPage();
          await prepare(original, ORIGINAL_URL + path);
          await original.screenshot({
            path: `${SHOTS_DIR}/${name}-${width}-original.png`,
            fullPage: true,
            animations: "disabled",
          });
          await original.close();
        }
      });
    }
  });
}

test.describe("interactions", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("mobile menu opens, and closes on Escape", async ({ page }) => {
    await prepare(page, "/");
    // The accessible name flips between "Menu" and "Close", so target the disclosure itself.
    const toggle = page.locator("button[aria-controls]");
    const panel = page.locator("nav[id]");
    await expect(toggle).toHaveText(/Menu/);
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(panel.getByRole("link", { name: "Work" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(panel).toBeHidden();
  });

  test("text adventure: the fork opens the BrandMultiplier door", async ({ page }) => {
    await prepare(page, "/");
    const input = page.getByRole("textbox", { name: "Type a command" });
    for (const command of ["east", "take fork", "west", "south", "use fork"]) {
      await input.fill(command);
      await input.press("Enter");
    }
    const screen = page.getByRole("region", { name: "CRC text adventure" });
    await expect(screen).toContainText("The door swings open.");
    const diagnostic = screen.getByRole("link", { name: "Book the Diagnostic." });
    await expect(diagnostic).toHaveAttribute("href", /calendly\.com.*utm_source=crc/);
    await expect(diagnostic).toHaveAttribute("data-src", "adventure");
  });

  test("work filter hides other eras", async ({ page }) => {
    await prepare(page, "/work/");
    await page.getByRole("button", { name: "Origin" }).click();
    await expect(page.locator("#ledger")).toBeHidden();
    await expect(page.locator("#hard-rock-cafe")).toBeVisible();
  });
});

test.describe("accessibility", () => {
  test("skip link is the first stop and lands on main", async ({ page }) => {
    await prepare(page, "/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();
    await skip.press("Enter");
    await expect(page).toHaveURL(/#main$/);
  });

  for (const path of ["/", "/work/", "/work/ledger/", "/about/", "/why-some-brands-move-us/"]) {
    test(`${path} has one h1 and the core landmarks`, async ({ page }) => {
      await prepare(page, path);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.getByRole("banner")).toHaveCount(1);
      await expect(page.getByRole("main")).toHaveCount(1);
      await expect(page.getByRole("contentinfo")).toHaveCount(1);
    });
  }

  test("keyboard focus shows a visible outline", async ({ page }) => {
    await prepare(page, "/");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const outline = await page.evaluate(() => {
      const style = getComputedStyle(document.activeElement as Element);
      return { style: style.outlineStyle, width: parseFloat(style.outlineWidth) };
    });
    expect(outline.style).not.toBe("none");
    expect(outline.width).toBeGreaterThan(0);
  });

  test("the adventure is playable with the keyboard alone", async ({ page }) => {
    await prepare(page, "/");
    const input = page.getByRole("textbox", { name: "Type a command" });
    await input.focus();
    await page.keyboard.type("look");
    await page.keyboard.press("Enter");
    await expect(input).toBeFocused();
    await expect(input).toHaveValue("");
    const chip = page
      .getByRole("region", { name: "CRC text adventure" })
      .getByRole("button")
      .first();
    await chip.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("region", { name: "CRC text adventure" })).toContainText(/Exits:/i);
  });
});
