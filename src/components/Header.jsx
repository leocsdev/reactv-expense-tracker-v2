import ExpenseInfo from './ExpenseInfo';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <h1>Expense Tracker</h1>
      <ExpenseInfo />
    </header>
  );
}

export default Header;
