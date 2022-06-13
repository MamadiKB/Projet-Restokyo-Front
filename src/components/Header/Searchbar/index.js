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

// == Composant
const Searchbar = () => {
  const districtsList = useSelector((state) => state.districtsReducer.districtsList);
  // console.log(districts);
  const districtsSelectOption = districtsList.map((item) => (
    { key: item.id, value: item.name, text: item.name }
  ));
  const dispatch = useDispatch();

  const establishmentsOptions = [
    { key: '1', value: 'Restaurant', text: 'Restaurant' },
    { key: '2', value: 'Izakaya', text: 'Izakaya' },
  ];
  const specialityOptions = [
    { key: '1', value: 'Rament', text: 'Ramen' },
    { key: '2', value: 'Yakitori', text: 'Yakitori' },
    { key: '3', value: 'Soba', text: 'Soba' },
    { key: '4', value: 'Tonkatsu', text: 'Tonkatsu' },
    { key: '5', value: 'Sushi', text: 'Sushi' },
    { key: '6', value: 'Tempura', text: 'Tempura' },
  ];
  return (
    <section className="serchbar">
      <form onSubmit={(event) => {
        event.preventDefault();
        dispatch(addSelectSearchValue());
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
          <Select
            placeholder="Spécialités"
            options={specialityOptions}
            onChange={(event) => {
              // console.log(event.target.textContent);
              const action = changeSelectSpecialityValue(event.target.textContent);
              dispatch(action);
            }}
          />
        </div>
        <div className="serchbar__submit">
          <button className="serchbar__submit__button" type="submit">send</button>
        </div>
      </form>
      {/* <div className="serchbar__wrapper__form">
        <form className="serchbar__form">
          <input
            className="wrapper__form__input"
            type="text"
            name=""
            placeholder="Etablissement..."
          />
          <input className="wrapper__form__submit" type="submit" name="" value="Search" />
        </form>
      </div> */}
    </section>
  );
};

// == Export
export default Searchbar;
