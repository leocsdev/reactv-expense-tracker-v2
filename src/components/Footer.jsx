import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p>All rights reserved {year}</p>
    </footer>
  );
}

export default Footer;
