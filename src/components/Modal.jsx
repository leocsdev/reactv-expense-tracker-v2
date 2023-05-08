import { useContext } from 'react';

// style
import './Modal.css';

// context
import TransactionContext from '../context/TransactionContext';

function Modal({ children }) {
  const { setShowModal } = useContext(TransactionContext);

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <button className='btn' onClick={() => setShowModal((prev) => !prev)}>
          cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
