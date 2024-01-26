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
    <li className="w-25-percent-minus-16px">
      <div className="">
        <Image
          className="w-[332px] h-[445px] bg-neutral-50 rounded-lg"
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          width={332}
          height={445}
          alt={hero.title}
        />
      </div>
      <p>{hero.title}</p>
      <p>{hero.creators.items[0]?.name || "marvel"}</p>
    </li>
  );
};

export default ComicsItem;
