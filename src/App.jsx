import Layout from './components/layout/Layout';
import ExpenseInfo from './components/ExpenseInfo';
import TransactionList from './components/TransactionList';
import NewTransaction from './components/NewTransaction';

function App() {
  return (
    <Layout>
      <ExpenseInfo />
      <TransactionList />
      <NewTransaction />
    </Layout>
  );
}

export default App;
