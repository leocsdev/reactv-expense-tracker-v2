import ExpenseInfo from './ExpenseInfo';

function Header({ transactions }) {
  const style = {
    fontSize: '1.5rem',
  };

  return (
    <header className='header'>
      <h1 className='text-center mt-4' style={style}>
        Expense Tracker
      </h1>

      <ExpenseInfo transactions={transactions} />
    </header>
  );
}

export default Header;
