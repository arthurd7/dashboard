import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99] bg-black/75 flex justify-center items-center">
      <div className="w-[500px] h-[500px] flex flex-col bg-white border-3 border-solid border-black rounded-2xl p-5">
        {/* Modal content */}
        <div className="flex flex-col">
          <button
            type="button"
            className="self-end text-black bg-white border-2 rounded-md cursor-pointer py-1 px-2.5 hover:bg-black hover:text-white"
            onClick={onClose}
          >
            Close
          </button>

          <div className="h-[400px] flex flex-col justify-center items-center gap-20">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
