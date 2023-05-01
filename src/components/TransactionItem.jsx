import './TransactionItem.css';
import moment from 'moment';

function TransactionItem({ transaction }) {
  const { date, transactionType, transactionName, amount } = transaction;
  const formattedDate = moment(date);

  return (
    <>
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
        {transactionType === 'expense' ? -amount : amount}
      </div>
    </>
  );
}

export default TransactionItem;
