import { useState } from 'react';
import moment from 'moment';

// helpers
import { currencyFormat } from '../utils/utils';

// style
import './TransactionItem.css';

// components
import Modal from './Modal';
import TransactionForm from './TransactionForm';

function TransactionItem({
  transaction,
  handleUpdateTransaction,
  handleDeleteTransaction,
}) {
  const { date, transactionType, transactionName, amount } = transaction;
  const formattedDate = moment(date);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const updateTransaction = (transaction) => {
    handleUpdateTransaction(transaction);
    setShowUpdateModal(!showUpdateModal);
  };

  return (
    <>
      <li className='list-item' onClick={() => updateTransaction(transaction)}>
        <div className='date-info'>
          <span>
            {
              // Show only the month in words
              formattedDate.format('MMM')
            }
          </span>
          <span>
            {
              // Show only the day
              formattedDate.format('D')
            }
          </span>
        </div>
        <div className='transaction-container'>
          <div className='transaction-info'>
            <span
              className={`badge ${
                transactionType === 'expense'
                  ? 'badge--primary'
                  : 'badge--secondary'
              }`}
            >
              {transactionType}
            </span>
          </div>
          <div className='transaction-name'>{transactionName}</div>
        </div>
        <div className='amount-info'>
          {transactionType === 'expense'
            ? currencyFormat(-amount)
            : currencyFormat(amount)}
        </div>
      </li>

      {showUpdateModal && (
        <Modal setModal={setShowUpdateModal}>
          <TransactionForm
            handleTransaction={handleUpdateTransaction}
            transaction={transaction}
            handleDeleteTransaction={handleDeleteTransaction}
            edit={true}
            setModal={setShowUpdateModal}
          />
        </Modal>
      )}
    </>
  );
}

export default TransactionItem;
