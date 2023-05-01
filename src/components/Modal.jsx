import './Modal.css';

function Modal({ children, handleToggleModal }) {
  return (
    <div className='modal-backdrop' onClick={() => handleToggleModal()}>
      <div className='modal'>{children}</div>
    </div>
  );
}

export default Modal;
