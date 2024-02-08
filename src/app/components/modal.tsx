"use client";

import { useCardModal } from "../hooks/use-card-modal";

const Modal = () => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  return <div>dsfdsfsdfsd</div>;
};

export default Modal;
