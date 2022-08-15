/* eslint-disable max-len */
// == Imports
// -- tool
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// -- components
import Aside from 'src/components/Aside';
import Page404 from 'src/components/Page404';
// -- Main components
import HomeMain from 'src/components/Main/HomeMain';
import ListMain from 'src/components/Main/ListMain';
import TagsListMain from 'src/components/Main/TagsListMain';
import EstablishMain from 'src/components/Main/EstablishMain';
import UserMain from 'src/components/UserMain';
import Contact from 'src/components/Contact';
// -- styles
import './styles.scss';

// == Composant
const Main = () => {
  // -- for Aside
  const districtsList = useSelector((state) => state.districtsReducer.districtsList);
  // get all etablissements
  const etablishmentsList = useSelector((state) => state.establishmentsReducer.establishmentsList);
  // -- get 3 best etablissements
  const bestEstablishmentsList = useSelector((state) => state.establishmentsReducer.bestEstablishmentsList);
  // get all tags
  const tagsList = useSelector((state) => state.tagsReducer.tagsList);
  const userInfo = useSelector((state) => state.connectReducer.user);
  // -- for restaurantsList
  const restaurantsList = etablishmentsList.filter((item) => item.type === 'Restaurant');
  // -- for izakayaList
  const izakayaList = etablishmentsList.filter((item) => item.type === 'Izakaya');
  // -- slice all etablishmentsList for get 3 last etablissements
  const lastEstablishments = etablishmentsList.slice(etablishmentsList.length - 3);
  // -- for research by tags

  const researchValue = useSelector((state) => state.searchBarReducer.searchValue.speciality);
  const tagToShow = tagsList.filter((item) => item.slug === researchValue);
  const tagList = tagToShow.map((item) => item.establishments.filter((e) => e.status === 1));

  return (
    <main>
      <Aside districtsList={districtsList} />
      <Routes>

        <Route path="/" element={<HomeMain lastEstablishments={lastEstablishments} bestEstablishmentsList={bestEstablishmentsList} />} />
        <Route path="etablissement/:slug" element={<EstablishMain listToShow={etablishmentsList} />} />

        <Route path="restaurant/list" element={<ListMain listToShow={restaurantsList} />} />
        <Route path="restaurant/list/:slug" element={<EstablishMain listToShow={etablishmentsList} />} />

        <Route path="izakaya/list" element={<ListMain listToShow={izakayaList} />} />
        <Route path="izakaya/list/:slug" element={<EstablishMain listToShow={etablishmentsList} />} />

        <Route path="quartier/:slug" element={<ListMain listToShow={etablishmentsList} />} />
        <Route path="quartier/:slug/:slug" element={<EstablishMain listToShow={etablishmentsList} />} />

        <Route path={`tags/${researchValue}`} element={<TagsListMain listToShow={tagList} />} />
        <Route path={`tags/${researchValue}/:slug/list/:slug`} element={<EstablishMain listToShow={etablishmentsList} />} />

        <Route path={`mon-compte/${userInfo.pseudo}`} element={<UserMain />} />

        <Route path="contact/" element={<Contact />} />

        <Route path="/*" element={<Page404 />} />

      </Routes>
    </main>
  );
};

// == Export
export default Main;
