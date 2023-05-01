import './TransactionList.css';

import TransactionItem from './TransactionItem';

function TransactionList({ transactions }) {
  return (
    <ul className='transaction-list'>
      {transactions.map((transaction) => (
        <li key={transaction.id} className='list-item'>
          <TransactionItem transaction={transaction} />
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;
