// == Import
import PropTypes from 'prop-types';
// -- styles
import './field.scss';
// == Component
const Field = ({
  identifier,
  placeholder,
  label,
  type,
  value,
  changeField,
}) => {
  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;
    changeField(name, inputValue);
  };

  return (
    <div className="field">
      <input
        className="input"
        autoComplete="off"
        id={identifier}
        placeholder={placeholder}
        name={identifier}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}
      </label>
    </div>
  );
};

Field.propTypes = {
  /** Field component props
   * identifier: for the input  used both for name and id => must be unique
   * placeholder: text used as placeholder
   * label: type: text used as label
   * value: text used as value for the input
   * changeField: function called when onChange event is received by the input, two parameters :
   * - identifier
   * - new value
   */
  identifier: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  changeField: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  value: '',
};

export default Field;
