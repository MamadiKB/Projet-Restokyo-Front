// == Import
import { useSelector } from 'react-redux';
// -- components semantic-ui-react
import { Dropdown, Select } from 'semantic-ui-react';
// -- styles
import './styles.scss';

// == Composant
const Searchbar = () => {
  const districts = useSelector((state) => state.districts);
  const districtsSelectOption = districts.map((item) => (
    { key: item.id, value: item.name, text: item.name }
  ));
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
      <div className="serchbar__select__wrapper">
        <Select
          placeholder="Établissements"
          options={establishmentsOptions}
          onChange={(event) => {
            console.log(event.target.textContent);
          }}
        />
        <Select
          placeholder="Quartiers"
          options={districtsSelectOption}
          onChange={(event) => {
            console.log(event.target.textContent);
          }}
        />
        <Select
          placeholder="Spécialités"
          options={specialityOptions}
          onChange={(event) => {
            console.log(event.target.textContent);
          }}
        />
      </div>
      <div className="serchbar__wrapper__form">
        <form className="serchbar__form">
          <input className="wrapper__form__input" type="text" name="" placeholder="Etablissement..." />
          <input className="wrapper__form__submit" type="submit" name="" value="Search" />
        </form>
      </div>
    </section>

  );
};

// == Export
export default Searchbar;
