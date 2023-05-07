import './TransactionList.css';

import TransactionItem from './TransactionItem';

function TransactionList({ transactions, handleUpdateTransaction }) {
  return (
    <ul className='transaction-list'>
      {transactions.map((transaction) => (
        <TransactionItem
          transaction={transaction}
          key={transaction.id}
          handleUpdateTransaction={handleUpdateTransaction}
        />
      ))}
    </ul>
  );
}

export default TransactionList;
