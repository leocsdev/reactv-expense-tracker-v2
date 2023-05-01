import './Modal.css';

function Modal({ children, handleToggleModal }) {
  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <button className='btn' onClick={() => handleToggleModal()}>
          cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
