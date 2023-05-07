import './TransactionList.css';

import TransactionItem from './TransactionItem';

function TransactionList({ transactions }) {
  return (
    <ul className='transaction-list'>
      {transactions.map((transaction) => (
        <TransactionItem transaction={transaction} key={transaction.id} />
      ))}
    </ul>
  );
}

export default TransactionList;
