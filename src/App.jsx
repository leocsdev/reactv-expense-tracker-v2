import Header from './components/Header';
import TransactionList from './components/TransactionList';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      // Fetch transactions data from the server
      const response = await fetch('http://localhost:3000/transactions');
      const data = await response.json();
      // update transactions state from the server
      setTransactions(data);
    };
    // invoke fetching transactions
    fetchTransactions();
  }, []);

  return (
    <main className='container'>
      <Header transactions={transactions} />
      <TransactionList transactions={transactions} />
      <Footer />
    </main>
  );
}

export default App;
