import { HomeCardComponent } from "../components/cards/home-card";
import { HomeCardsInfo } from "../constants/home-info";

export function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-10 pb-5 w-full md:w-9/12 mx-auto">
        {HomeCardsInfo.map((info, index) => (
          <HomeCardComponent
            imageSide={index % 2 === 0 ? "left" : "right"}
            title={info.title}
            paragraphs={info.paragraphs}
            image={info.image}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
