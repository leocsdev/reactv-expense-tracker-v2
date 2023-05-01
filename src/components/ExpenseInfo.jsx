function ExpenseInfo({ transactions }) {
  let totalTransactionsAmount = transactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);

  console.log(totalTransactionsAmount);
  return (
    <div>
      <h3>Expenses: {totalTransactionsAmount}</h3>
    </div>
  );
}

export default ExpenseInfo;
