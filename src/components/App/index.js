// == Import
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

import { fetchEstablishmentsList, fetchDistrictList } from 'src/actions/fetch';

import './styles.scss';

// == Composant
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEstablishmentsList());
    dispatch(fetchDistrictList());
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
