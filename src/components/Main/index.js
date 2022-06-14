// == Imports
// -- tool
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// -- styles
import './styles.scss';
// -- components
import Aside from 'src/components/Aside';
// -- Home components
import HomeMain from 'src/components/Main/HomeMain';
import ListMain from 'src/components/Main/ListMain';
import EstablishMain from './EstablishMain';

// == Composant
const Main = () => {
  // -- for Aside
  const districtsList = useSelector((state) => state.districtsReducer.districtsList);
  // get all etablissements
  const etablissementsList = useSelector((state) => state.establishmentsReducer.establishmentsList);
  // console.log(etablissementsList);
  // -- for restaurantsList
  const restaurantsList = etablissementsList.filter((item) => item.type === 'restaurant');
  // console.log(restaurantsList);
  // -- for izakayaList
  const izakayaList = etablissementsList.filter((item) => item.type === 'izakaya');
  // -- get 3 last etablissements
  const lastEstablishments = etablissementsList.slice(etablissementsList.length - 3);
  // console.log(etablissementsList);
  // console.log(lastEstablishments);
  return (
    <main>
      <Aside districtsList={districtsList} />
      {/* <EstablishMain listToShow={etablissementsList} /> */}
      <Routes>
        <Route path="/" element={<HomeMain lastEstablishments={lastEstablishments} /* bestEtablissementsList={} */ />} />
        <Route path="/:slug" element={<EstablishMain listToShow={etablissementsList}/* bestEtablissementsList={} */ />} />
        <Route path="restaurants" element={<ListMain listToShow={restaurantsList} />} />
        <Route path="restaurants/:slug" element={<EstablishMain listToShow={etablissementsList} />} />
        <Route path="izakaya" element={<ListMain listToShow={izakayaList} />} />
        <Route path="izakaya/:slug" element={<EstablishMain listToShow={etablissementsList} />} />
        <Route path="quartiers/:slug" element={<ListMain listToShow={etablissementsList} />} />
        <Route path="quartiers/:slug/:slug" element={<EstablishMain listToShow={etablissementsList} />} />
        <Route path="quartiers/:slug" element={<EstablishMain listToShow={etablissementsList} />} />
      </Routes>
    </main>
  );
};

// == Export
export default Main;
