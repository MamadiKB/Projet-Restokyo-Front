// == Import
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Modal from 'src/components/Modal';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import UserMain from 'src/components/UserMain';

import { fetchEstablishmentsList, fetchDistrictList, fetchBestEstablishmentsList } from 'src/actions/fetch';
import { saveWhenRefresh, ifTokenWhenRefresh } from 'src/actions/connect';
import './styles.scss';

// == Composant
function App() {
  const dispatch = useDispatch();
  const jtk = useSelector((state) => state.connectReducer.token);
  useEffect(() => {
    dispatch(fetchEstablishmentsList());
    dispatch(fetchDistrictList());
    dispatch(fetchBestEstablishmentsList());
  }, []);

  useEffect(() => {
    const jsontS = JSON.parse(localStorage.getItem('jsont'));
    dispatch(saveWhenRefresh(jsontS));
  }, []);

  useEffect(() => {
    localStorage.setItem('jsont', JSON.stringify(jtk));
    if (jtk) {
      dispatch(ifTokenWhenRefresh());
    }
  }, [jtk]);

  return (
    <div className="app">
      <Header />
      <Modal />
      {/* <UserMain /> */}
      <Main />
      <Footer />
    </div>
  );
}

// == Export
export default App;
