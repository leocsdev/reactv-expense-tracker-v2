import './TransactionList.css';

import TransactionItem from './TransactionItem';

function TransactionList({
  transactions,
  handleUpdateTransaction,
  handleDeleteTransaction,
}) {
  return (
    <ul className='transaction-list'>
      {transactions.map((transaction) => (
        <TransactionItem
          transaction={transaction}
          key={transaction.id}
          handleUpdateTransaction={handleUpdateTransaction}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      ))}
    </ul>
  );
}

export default TransactionList;
