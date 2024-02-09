"use client";

import clsx from "clsx";
import { useCardModal } from "../hooks/use-card-modal";

const Modal = () => {
  const hero = useCardModal((state) => state.hero);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  console.log(hero);

  return (
    <div
      className={clsx(
        "h-screen w-screen bg-[#00000066] fixed top-0 left-0 flex items-center justify-center scale-0",
        isOpen ? "scale-100" : ""
      )}
      onClick={() => onClose()}
    >
      <div
        className="p-5 rounded-xl bg-neutral-50"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{hero?.title}</h2>
        <p>{hero?.description}</p>
        <ul>
          <li>
            <p>format</p>
            <p>{hero?.format}</p>
          </li>
          <li>
            <p>year released</p>
            <p>1967</p>
          </li>
          <li>
            <p>pages</p>
            <p>{hero?.pageCount}</p>
          </li>
          <li>
            <p>price</p>
            <p>${hero?.prices[0]?.price}</p>
          </li>
        </ul>
        <h3>Creator</h3>
        <div></div>
        <div>
          <h4>Characters</h4>
          <ul>
            {hero?.characters?.items.map((perc: any) => (
              <li key={perc.name}>
                {perc.name}
                <img src={perc.resourceURI} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
