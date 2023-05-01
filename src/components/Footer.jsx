import './Footer.css';

function Footer({ handleToggleModal }) {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <button className='btn' onClick={() => handleToggleModal()}>
        Add New Transaction
      </button>

      <p style={{ textAlign: 'center' }}>All rights reserved {year}</p>
    </footer>
  );
}

export default Footer;
