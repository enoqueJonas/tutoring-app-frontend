import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({
  id, type, placeholder, value, onChange,
}) => (
  <div className="mb-3 animate__animated animate__fadeIn">
    <label htmlFor={id} className="form-label">
      {id.charAt(0).toUpperCase() + id.slice(1)}
      <input
        type={type}
        className="form-control shadow bg-white rounded"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
