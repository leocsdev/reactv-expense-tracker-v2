import ExpenseInfo from './ExpenseInfo';
import './Header.css';

function Header({ transactions }) {
  // const style = {
  //   fontSize: '1.5rem',
  // };

  return (
    <header className='header'>
      <h1 style={{ fontSize: '1.5rem' }}>Expense Tracker</h1>

      <ExpenseInfo transactions={transactions} />
    </header>
  );
}

export default Header;
