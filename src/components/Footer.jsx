import NewTransaction from './NewTransaction';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <NewTransaction />
      <p className='text-center'>All rights reserved {year}.</p>
    </footer>
  );
}

export default Footer;
