import moment from 'moment';

function TransactionList({ transactions }) {
  return (
    <ul className='transaction-list'>
      {transactions.map((transaction) => {
        const { id, date, transactionName, transactionType, amount, category } =
          transaction;

        const formattedDate = moment(date);

        return (
          <li key={id} className='list-item'>
            <p>
              {
                // Show only the month in words
                formattedDate.format('MMM')
              }{' '}
              {
                // Show only the day
                formattedDate.format('D')
              }
            </p>

            <p>{transactionName}</p>
            <p>{transactionType}</p>
            <p>{category}</p>
            <p>{amount}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default TransactionList;
