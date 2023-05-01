function TransactionList({ transactions }) {
  return (
    <ul className='transaction-list'>
      {transactions.map((transaction) => {
        const { id, transactionName, transactionType, amount, category } =
          transaction;
        return (
          <li key={id} className='list-item'>
            <p>{transactionName}</p>
            <p>{transactionType}</p>
            <p>{category}</p>
            <p>{amount}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default TransactionList;
