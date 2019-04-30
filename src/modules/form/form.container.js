import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import FormComponent from './form.component';
export const FormContainer = (props) => {
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };
  console.log('Conatainer Props: ', props)
  return (
    <FormComponent
      formValues={props.formValues}
      change={props.change}
      onSubmit={submitForm}
      handleSubmit={props.handleSubmit}
    />
  );
};
const mapStateToProps = (state) => ({
  formValues: getFormValues('Form')(state),
});
const formConfiguration = {
  form: 'Form',
};
export default connect(mapStateToProps)(
  reduxForm(formConfiguration)(FormContainer),
);
