import React from 'react';
import { Field, reduxForm} from 'redux-form';
import Text from '../components/text';
import Select from '../components/select';
import Radio from '../components/radio';
import Checkbox from '../components/checkbox';
import Datepicker from '../components/datepicker';
import { required } from './form.validators'
import logo from './images/Layer 1.png'; // with import
export const FormComponent = ({ handleSubmit, pristine, submitting, onSubmit, reset, formValues, change }) => {
  return (
    <div className="flex flex-column justify-center items-center">
      <img src={logo} alt="company logo" />
      {/* <h1>YoDj Check-In</h1> */}
      <form
        id="form"
        className="w-80"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          className="textField"
          name="Dj Name"
          label="Dj Name"
                  component={Text}
                  validate={required}
                  
        />
        <Field
          className="textField"
          name="Event Address"
          label="Event Address"
                  component={Text}
                  validate={required}
        />
        
        
        <Field
          className="textField"          
          name="email"
          label="Email"
                  component={Text}
                  validate={required}
                  
              />
        <Field
          className="textField"          
          name="Cover Price"
          label="Cover Price"
          component={Select}
          options={{
            none: 'Free',
            below20: '$20 or under',
            higher20: '$20 or higher'
          }}
              />
              <Field
          name="Time of Day"
          label="Time of Day"
          component={Radio}
          options={{
            day: 'Day',
            evening: 'Evening',
            night: 'Night'
          }}
              />
              <Field
          name="moreThanONe"
          label="Are you the only Dj?"
          component={Checkbox}
              />
               <Field
          name="eventDate"
          label="Event Date"
          component={Datepicker}
          change={change}
        />
        <button
          type="submit" className="link br2 bg-black white dim pa3 f6 sans-serif b--black ba" disabled={pristine || submitting} onClick={reset}>Submit
        </button>
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'FormComponent'
})(FormComponent)