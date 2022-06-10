// == Import
import Header from 'src/components/Header';
import HomeMain from 'src/components/HomeMain';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <HomeMain />
      <Footer />
    </div>
  );
}

// == Export
export default App;
