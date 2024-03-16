import { ReactNode } from "react";

type HomeCardProps = {
  imageSide: "left" | "right";
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
    caption?: string | ReactNode;
  };
};

export function HomeCardComponent({ title, paragraphs, image, imageSide }: HomeCardProps) {
  return (
    <>
      <section
        className={`${
          imageSide === "right" ? "md:flex-row-reverse" : "md:flex-row"
        } flex flex-col justify-center gap-4 md:gap-10 py-7 px-7 rounded-md bg-zinc-300/75 dark:bg-zinc-800/25`}
      >
        <div className="flex flex-col justify-center mb-5 md:mb-10 flex-1 gap-3">
          <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="w-full md:w-2/5">
          <figure className="space-y-2">
            <img
              src={image.src}
              alt={image.alt}
              className="bg-transparent bg-cover w-auto h-auto max-h-96 rounded-lg shadow-md shadow-slate-950 dark:shadow-2xl dark:shadow-slate-700/15 aspect-video"
            />
            {image.caption && <figcaption className="mx-4">{image.caption}</figcaption>}
          </figure>
        </div>
      </section>
    </>
  );
}
