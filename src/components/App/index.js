// == Import
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

import { fetchEstablishments } from 'src/actions/fetch';

import './styles.scss';

// == Composant
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEstablishments());
  }, []);
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// == Export
export default App;
