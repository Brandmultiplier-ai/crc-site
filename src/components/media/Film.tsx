/** A captioned 16:9 film with native controls (case-study launch films, the pitch films). */
export function Film({
  src,
  poster,
  title,
  description,
  duration,
}: {
  src: string;
  poster: string;
  title: string;
  description: string;
  /** Display length, for example "3:53" or "30s". */
  duration: string;
}) {
  return (
    <figure className="m-0 mb-7">
      <video
        controls
        playsInline
        preload="metadata"
        poster={poster}
        width={1920}
        height={1080}
        className="block aspect-video h-auto w-full border border-line bg-black"
      >
        <source src={src} type="video/mp4" />
        Your browser can&apos;t play this video. <a href={src}>Download it</a>.
      </video>
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 px-0.5 pt-2.5 font-mono text-[13px] leading-[1.6] text-muted">
        <span>
          <b className="font-medium text-ink">{title}</b> · {description}
        </span>
        <span>{duration}</span>
      </figcaption>
    </figure>
  );
}
