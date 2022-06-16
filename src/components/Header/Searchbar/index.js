// == Import
import { useDispatch, useSelector } from 'react-redux';
// === action import
// -- Select action
import {
  changeSelectDistrictValue,
  changeSelectEstablishmentValue,
  changeSelectSpecialityValue,
  addSelectSearchValue,
} from 'src/actions/app';
// -- components semantic-ui-react
import { Select } from 'semantic-ui-react';
// -- styles
import './styles.scss';
import { useNavigate } from 'react-router-dom';

// == Composant
const Searchbar = () => {
  const districtsList = useSelector((state) => state.districtsReducer.districtsList);
  const researchValue = useSelector((state) => state.searchBarReducer);
  // console.log(districts);
  const districtsSelectOption = districtsList.map((item) => (
    { key: item.id, value: item.name, text: item.name }
  ));
  const dispatch = useDispatch();

  const establishmentsOptions = [
    { key: '1', value: 'restaurant', text: 'restaurant' },
    { key: '2', value: 'izakaya', text: 'izakaya' },
  ];
  /*   const specialityOptions = [
    { key: '1', value: 'Rament', text: 'Ramen' },
  ]; */
  const navigate = useNavigate();
  return (
    <section className="serchbar">
      <form onSubmit={(event) => {
        event.preventDefault();
        dispatch(addSelectSearchValue());
        navigate(`recherch/${researchValue.etablishmentValue}/${researchValue.districtValue}`);
      }}
      >
        <div className="serchbar__select__wrapper">
          <Select
            placeholder="Établissements"
            options={establishmentsOptions}
            onChange={(event) => {
              // console.log(event.target.textContent);
              const action = changeSelectEstablishmentValue(event.target.textContent);
              dispatch(action);
            }}
          />
          <Select
            placeholder="Quartiers"
            options={districtsSelectOption}
            onChange={(event) => {
              // console.log(event.target.textContent);
              const action = changeSelectDistrictValue(event.target.textContent);
              dispatch(action);
            }}
          />
          {/*           <Select
            placeholder="Spécialités"
            options={specialityOptions}
            onChange={(event) => {
              // console.log(event.target.textContent);
              const action = changeSelectSpecialityValue(event.target.textContent);
              dispatch(action);
            }}
          /> */}
        </div>
        <div className="serchbar__submit">
          <button className="serchbar__submit__button" type="submit">send</button>
        </div>
      </form>

    </section>
  );
};

// == Export
export default Searchbar;
