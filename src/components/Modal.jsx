import './Modal.css';

function Modal({ children, setModal }) {
  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <button className='btn' onClick={() => setModal((prev) => !prev)}>
          cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
