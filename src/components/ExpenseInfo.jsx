import { currencyFormat } from '../utils/utils';

function ExpenseInfo({ transactions }) {
  const totalExpenses = transactions
    .filter((transaction) => {
      return transaction.transactionType === 'expense';
    })
    .reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);

  const totalIncome = transactions
    .filter((transaction) => {
      return transaction.transactionType === 'income';
    })
    .reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);

  return (
    <div>
      <h2>Balance: {currencyFormat(totalIncome - totalExpenses)}</h2>
      <h3>Income: {currencyFormat(totalIncome)}</h3>
      <h3>Expenses: {currencyFormat(totalExpenses)}</h3>
    </div>
  );
}

export default ExpenseInfo;
