import { defineConfig, devices } from "@playwright/test";

/**
 * Visual and responsive checks. Runs against a production server:
 *   npm run build && npm run start
 *   npm run test:visual
 * Set ORIGINAL_URL to also capture the approved static build for side-by-side review.
 */
export default defineConfig({
  testDir: "./tests",
  outputDir: "./test-results",
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",
    ...devices["Desktop Chrome"],
  },
});
