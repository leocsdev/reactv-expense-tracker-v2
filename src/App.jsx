// import { useState, useEffect } from 'react';

// style
import './App.css';

// components
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import Footer from './components/Footer';
import Modal from './components/Modal';
import TransactionForm from './components/TransactionForm';
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    <TransactionProvider>
      <main className='app-container'>
        <Header />
      </main>
    </TransactionProvider>
  );

  // const [transactions, setTransactions] = useState([]);
  // const [showModal, setShowModal] = useState(false);

  // const handleAddTransaction = (transaction) => {
  //   // Add new transaction
  //   setTransactions((currentTransactions) => [
  //     transaction,
  //     ...currentTransactions,
  //   ]);
  // };

  // const handleUpdateTransaction = (id, updatedTransaction) => {
  //   setTransactions(
  //     transactions.map((transaction) =>
  //       transaction.id === id
  //         ? { ...transaction, ...updatedTransaction }
  //         : transaction
  //     )
  //   );
  // };

  // const handleDeleteTransaction = (id) => {
  //   if (window.confirm('Are you sure you want to delete this transaction?')) {
  //     setTransactions(
  //       transactions.filter((transaction) => transaction.id !== id)
  //     );
  //   }
  // };

  // useEffect(() => {
  //   const fetchTransactions = async () => {
  //     // Fetch transactions data from the server
  //     const response = await fetch('http://localhost:3000/transactions');
  //     const data = await response.json();
  //     // update transactions state
  //     setTransactions(data);
  //   };
  //   // invoke fetching transactions
  //   fetchTransactions();
  // }, []);

  // return (
  //   <main className='app-container'>
  //     <Header transactions={transactions} />
  //     <TransactionList
  //       transactions={transactions}
  //       handleUpdateTransaction={handleUpdateTransaction}
  //       handleDeleteTransaction={handleDeleteTransaction}
  //     />

  //     <button className='new-btn' onClick={() => setShowModal((prev) => !prev)}>
  //       Add New Transaction
  //     </button>

  //     <Footer />

  //     {showModal && (
  //       <Modal setModal={setShowModal}>
  //         <TransactionForm
  //           handleTransaction={handleAddTransaction}
  //           setModal={setShowModal}
  //         />
  //       </Modal>
  //     )}
  //   </main>
  // );
}

export default App;
