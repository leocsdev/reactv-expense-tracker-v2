import { createContext, useEffect, useState } from 'react';

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  // Initialize transactions state
  const [transactions, setTransactions] = useState([]);

  // Transaction form modal state
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      // Fetch transactions data from the server
      const response = await fetch('http://localhost:3000/transactions');
      const data = await response.json();
      // update transactions state
      setTransactions(data);
    };
    // invoke fetching transactions
    fetchTransactions();
  }, []);

  // Add transaction

  // Edit/Update transaction

  // Delete transaction

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionContext;
