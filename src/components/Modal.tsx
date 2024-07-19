interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: string;
}
const Modal = ({ showModal, setShowModal, children }: ModalProps) => {
  return (
    <div className={`${showModal ? "block" : "hidden"} fixed left-0 top-0 w-full h-full overflow-auto modal`}>
      <div className="p-5 bg-zinc-50 m-auto w-10/12 relative">
        <div className="absolute top-1 text-3xl font-bold" onClick={() => setShowModal(false)}>
          &times;
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
