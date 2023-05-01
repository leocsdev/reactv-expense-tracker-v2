import { useState, useEffect } from 'react';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import Footer from './components/Footer';
import Modal from './components/Modal';
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const addTransaction = (transaction) => {
    // Add new transaction
    setTransactions((currentTransactions) => [
      transactions,
      ...currentTransactions,
    ]);

    // Close the modal after
    handleToggleModal();
  };

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

  return (
    <main className='container'>
      <Header transactions={transactions} />
      <TransactionList transactions={transactions} />
      {/* Footer component has the Add New Transaction button */}
      <Footer handleToggleModal={handleToggleModal} />

      {showModal && (
        <Modal handleToggleModal={handleToggleModal}>
          <AddTransactionForm />
        </Modal>
      )}
    </main>
  );
}

export default App;
