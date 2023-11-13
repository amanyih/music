import modalStyle from "./style";
interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div
      className={modalStyle.modal}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={modalStyle.modalContent}>
        <span className={modalStyle.close} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
