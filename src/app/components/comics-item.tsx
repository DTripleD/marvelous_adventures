import Image from "next/image";
import { useCardModal } from "../hooks/use-card-modal";

interface ComicsItemProps {
  hero: {
    thumbnail: {
      path: string;
      extension: string;
    };
    title: string;
    creators: { items: { name: string }[] };
    id: string;
  };
}

const ComicsItem = ({ hero }: ComicsItemProps) => {
  const onOpen = useCardModal((state) => state.onOpen);

  return (
    <li
      className="flex flex-col w-full md:w-50-percent-minus-16px lg:w-25-percent-minus-12px"
      onClick={() => onOpen(hero)}
    >
      <div className="w-full h-[445px] rounded-lg overflow-hidden">
        <Image
          className="block w-full h-full"
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          width={335}
          height={445}
          alt={hero.title}
        />
      </div>
      <div className="pt-4 flex-grow flex flex-col gap-1 md:gap-2">
        <h3 className="font-medium text-[18px] leading-[24px]  md:text-2xl md:leading-[24px] text-neutral-50">
          {hero.title}
        </h3>
        <p className="text-neutral-50/50 font-normal text-[14px] md:text-base leading-[18px] md:leading-[18px] ">
          {hero.creators.items[0]?.name || "marvel"}
        </p>
      </div>
    </li>
  );
};

export default ComicsItem;
