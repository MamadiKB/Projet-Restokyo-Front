// == Import
import { Select } from 'semantic-ui-react';
import './styles.scss';

// == Composant
const Searchbar = () => {
  const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
  ];
  return (
    <section className="serchbar">
      <div className="serchbar__select__wrapper">

        <Select placeholder="Établissements" options={countryOptions} />
        <Select placeholder="Quartiers" options={countryOptions} />
        <Select placeholder="Spécialités" options={countryOptions} />

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
