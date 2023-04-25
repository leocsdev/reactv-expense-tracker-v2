import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  return (
    <main>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
}

export default Layout;
