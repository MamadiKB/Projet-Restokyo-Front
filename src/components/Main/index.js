/* eslint-disable max-len */
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
  // -- for restaurantsList
  const restaurantsList = etablissementsList.filter((item) => item.type === 'restaurant');
  // -- for izakayaList
  const izakayaList = etablissementsList.filter((item) => item.type === 'izakaya');
  // -- get 3 last etablissements
  const lastEstablishments = etablissementsList.slice(etablissementsList.length - 3);
  // -- for research
  const researchValue = useSelector((state) => state.searchBarReducer.searchValue);
  // console.log(researchValue);
  const searchType = etablissementsList.filter((item) => item.type === researchValue.etablishment);
  const searchDisTyp = searchType.filter((item) => item.district.name === researchValue.district);
  // console.log(researchValue);
  /*   console.log(researchSelect.etablishmentValue); */
  // console.log(searchDistrict);
  return (
    <main>
      <Aside districtsList={districtsList} />
      <Routes>
        <Route path="/" element={<HomeMain lastEstablishments={lastEstablishments} /* bestEtablissementsList={} */ />} />
        <Route path="/:slug" element={<EstablishMain listToShow={etablissementsList}/* bestEtablissementsList={} */ />} />
        <Route path="restaurant/list" element={<ListMain listToShow={restaurantsList} />} />
        <Route path="recherch/restaurant/" element={<ListMain listToShow={restaurantsList} />} />
        <Route path="restaurant/list/:slug" element={<EstablishMain listToShow={etablissementsList} />} />

        <Route path="izakaya/list" element={<ListMain listToShow={izakayaList} />} />
        <Route path="recherch/izakaya/" element={<ListMain listToShow={izakayaList} />} />
        <Route path="izakaya/list/:slug" element={<EstablishMain listToShow={etablissementsList} />} />

        <Route path="quartier/:slug" element={<ListMain listToShow={etablissementsList} />} />
        <Route path="quartier/:slug/:slug" element={<EstablishMain listToShow={etablissementsList} />} />

        <Route path={`recherch/${researchValue.etablishment}/:slug`} element={<EstablishMain listToShow={etablissementsList} />} />
        <Route path={`recherch/${researchValue.etablishment}/${researchValue.district}`} element={<ListMain listToShow={searchDisTyp} />} />
        <Route path={`recherch/${researchValue.etablishment}/${researchValue.district}/:slug`} element={<EstablishMain listToShow={etablissementsList} />} />
        <Route path={`${researchValue.etablishment}/${researchValue.district}/${researchValue.speciality}`} element={<ListMain listToShow={etablissementsList} />} />
      </Routes>
    </main>
  );
};

// == Export
export default Main;
