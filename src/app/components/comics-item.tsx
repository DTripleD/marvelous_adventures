import Image from "next/image";

interface ComicsItemProps {
  hero: {
    thumbnail: {
      path: string;
      extension: string;
    };
    title: string;
    creators: { items: { name: string }[] };
  };
}

const ComicsItem = ({ hero }: ComicsItemProps) => {
  return (
    <li className="flex flex-col w-25-percent-minus-12px">
      <div className="max-w-[332px] h-[445px] rounded-lg overflow-hidden">
        <Image
          className="block w-full h-full"
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          width={332}
          height={445}
          alt={hero.title}
        />
      </div>
      <div className="pt-4 pb-2 flex-grow">
        <h3 className="font-medium text-2xl leading-[24px] text-neutral-50">
          {hero.title}
        </h3>
        <p className="text-neutral-50/50 font-normal text-sm leading-[18px]">
          {hero.creators.items[0]?.name || "marvel"}
        </p>
      </div>
    </li>
  );
};

export default ComicsItem;
