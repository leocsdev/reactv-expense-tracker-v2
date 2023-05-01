import moment from 'moment';

function TransactionItem({ transaction }) {
  const { date, transactionType, transactionName, amount, category } =
    transaction;
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
          <span className='transaction-type'>{transactionType}</span>
          <span className='category'>{category}</span>
        </div>
        <div className='transaction-name'>{transactionName}</div>
      </div>
      <div className='amount-info'>{amount}</div>
    </>
  );
}

export default TransactionItem;
