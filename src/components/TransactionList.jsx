import { useContext } from 'react';

// style
import './TransactionList.css';

// context
import TransactionContext from '../context/TransactionContext';

// components
import TransactionItem from './TransactionItem';

function TransactionList() {
  const { transactions } = useContext(TransactionContext);

  return (
    <ul className='transaction-list'>
      {transactions.map((transaction) => (
        <TransactionItem transaction={transaction} key={transaction.id} />
      ))}
    </ul>
  );
}

export default TransactionList;
