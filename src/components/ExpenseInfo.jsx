function ExpenseInfo({ transactions }) {
  // const totalTransactionsAmount = transactions.reduce((total, transaction) => {
  //   return total + transaction.amount;
  // }, 0);

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
      <h2>Balance: {totalIncome - totalExpenses}</h2>
      <h3>Income: {totalIncome}</h3>
      <h3>Expenses: {totalExpenses}</h3>
    </div>
  );
}

export default ExpenseInfo;
