// == Import
// -- tool
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// -- components
import Header from 'src/components/Header';
import Modal from 'src/components/Modal';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import UserMain from 'src/components/UserMain';
// -- actions
import {
  fetchEstablishmentsList,
  fetchDistrictList,
  fetchBestEstablishmentsList,
  fetchTagsList,
} from 'src/actions/fetch';
import { saveWhenRefresh, ifTokenWhenRefresh } from 'src/actions/connect';
import { changeSelectSpecialityValue, addSelectSearchValue } from 'src/actions/app';
// -- styles
import 'semantic-ui-css/semantic.min.css';

// == Composant
function App() {
  const dispatch = useDispatch();
  const jtk = useSelector((state) => state.connectReducer.token);
  useEffect(() => {
    dispatch(fetchEstablishmentsList());
    dispatch(fetchDistrictList());
    dispatch(fetchBestEstablishmentsList());
    dispatch(fetchTagsList());
  }, []);

  useEffect(() => {
    const researchSave = JSON.parse(localStorage.getItem('recherch'));
    const jsontS = JSON.parse(localStorage.getItem('jsont'));
    dispatch(saveWhenRefresh(jsontS));
    dispatch(changeSelectSpecialityValue(researchSave));
    dispatch(addSelectSearchValue());
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
