import React from 'react';
import { Form, Field } from 'react-final-form';
import './AddVehicleForm.css';

//import { Button } from 'components';

const required = (value) => (value ? undefined : 'Required');

const Input = ({ input, meta, fieldType = 'text', step, placeholder, initialValue, disabled }) => {
  return (
    <div className="input">
      <label>{placeholder}</label>

      <input
        className="field"
        {...input}
        step={step}
        disabled={disabled}
        initialvalue={initialValue}
        type={disabled ? 'clear' : fieldType}
        placeholder={placeholder ? placeholder : fieldType}
      />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

export function AddVehicleForm({ numericLabels, lastIndex }) {
  const addVehicle = (values) => {
    const { name, origin, mpg, cylinders, displacement, horsepower, weight, acceleration, year } = values;
    fetch(
      `/api/vehicles/add?id=${
        lastIndex + 1
      }&name=${name}&origin=${origin}&mpg=${mpg}&cylinders=${cylinders}&displacement=${displacement}&horsepower=${horsepower}&weight=${weight}&acceleration=${acceleration}&year=${year}`
    ).then(() => {
      window.location.reload(true);
    });
  };
  const numericFields = numericLabels.map((el) => (
    <Field
      key={el}
      name={el}
      validate={required}
      step="0.1"
      fieldType="number"
      parse={(value) => parseFloat(value, 8)}
      placeholder={el}
      component={Input}
    />
  ));
  return (
    <div>
      <Form
        onSubmit={addVehicle}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name" fieldType={'Description'} placeholder={'name'} validate={required} component={Input} />
            <Field
              name="origin"
              fieldType={'Description'}
              placeholder={'origin'}
              validate={required}
              component={Input}
            />
            {numericFields}
            <div className="buttons">
              <button
                type="button"
                variant={'inline'}
                style={{ marginRight: '30px' }}
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>

              <button type="submit" disabled={submitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default AddVehicleForm;
