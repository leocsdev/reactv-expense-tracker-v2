import { useState } from 'react';
import './AddTransactionForm.css';

function AddTransactionForm({ handleAddTransaction }) {
  const [date, setDate] = useState('');
  const [transactionType, setTransactionType] = useState('expense');
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState(0.0);

  const resetForm = () => {
    setDate('');
    setTransactionType('');
    setTransactionName('');
    setAmount(0.0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      // Temporary id
      id: Math.floor(Math.random() * 1_000_000),
      date,
      transactionType,
      transactionName,
      amount: parseFloat(amount),
    };

    handleAddTransaction(transaction);
    // reset form
    resetForm();
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
      <button className='add-btn'>Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;
