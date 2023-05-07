import { useEffect, useState } from 'react';
import moment from 'moment';
import './TransactionForm.css';

function TransactionForm({ handleTransaction, setModal, edit, transaction }) {
  // Get the current date and set the date to date state
  const dateNow = moment().format('YYYY-MM-DD');

  const [date, setDate] = useState(dateNow);
  const [transactionType, setTransactionType] = useState('expense');
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState('0.0');

  const [transactionToEdit, setTransactionToEdit] = useState({
    edit,
    transaction,
  });

  useEffect(() => {
    if (transactionToEdit.edit) {
      setDate(transaction.date);
      setTransactionType(transaction.transactionType);
      setTransactionName(transaction.transactionName);
      setAmount(transaction.amount);
    }
  }, [transactionToEdit.edit, transaction]);

  const resetForm = () => {
    setDate('');
    setTransactionType('');
    setTransactionName('');
    setAmount('0.0');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For updating transaction
    if (transactionToEdit.edit) {
      handleTransaction(transaction.id, {
        date,
        transactionType,
        transactionName,
        amount: parseFloat(amount),
      });

      // set edit transaction to false
      // and clear the transaction details
      // after update
      setTransactionToEdit({
        edit: false,
        transaction: {},
      });
    } else {
      // New Transaction
      handleTransaction({
        // Temporary id
        id: Math.floor(Math.random() * 1_000_000),
        date,
        transactionType,
        transactionName,
        amount: parseFloat(amount),
      });
    }

    resetForm();
    setModal((prev) => !prev);
  };

  return (
    <form className='new-transaction-form' onSubmit={handleSubmit}>
      <label>
        <span>Date</span>
        <input
          type='date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Type</span>
        <select
          defaultValue={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option value='expense'>Expense</option>
          <option value='income'>Income</option>
        </select>
      </label>
      <label>
        <span>Description</span>
        <input
          type='text'
          onChange={(e) => setTransactionName(e.target.value)}
          value={transactionName}
        />
      </label>
      <label>
        <span>Amount</span>
        <input
          type='number'
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </label>
      <button className='add-btn'>
        {edit ? 'Update Transaction' : 'Add Transaction'}
      </button>
    </form>
  );
}

export default TransactionForm;
