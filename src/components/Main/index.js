// == Imports
// -- tool
import { useSelector } from 'react-redux';
// -- styles
import './styles.scss';
// -- components
import Aside from 'src/components/Aside';
// -- Home components
import HomeMain from 'src/components/Main/HomeMain';
import { Route, Routes } from 'react-router-dom';
import MainList from 'src/components/Main/MainList';

// == Composant
const Main = () => {
  // -- for Aside
  const districtsList = useSelector((state) => state.districtsReducer.districtsList);

  // get all etablissements
  const etablissementsList = useSelector((state) => state.establishmentsReducer.establishmentsList);
  // -- for restaurantsList
  const restaurantsList = etablissementsList.filter((item) => item.type === 'Restaurant');
  // console.log(restaurantsList);
  // -- for izakayaList
  const izakayaList = etablissementsList.filter((item) => item.type === 'Izakaya');
  // -- get
  const lastEstablishments = etablissementsList.slice(etablissementsList.length - 3);

  // console.log(etablissementsList);
  // console.log(lastEstablishments);

  return (
    <main>
      <Aside districtsList={districtsList} />
      <Routes>
        <Route path="/" element={<HomeMain lastEstablishments={lastEstablishments} />} />
        <Route path="/restaurants" element={<MainList listToShow={restaurantsList} />} />
        <Route path="/izakaya" element={<MainList listToShow={izakayaList} />} />
      </Routes>
    </main>
  );
};

// == Export
export default Main;
