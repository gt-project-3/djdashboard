import React from 'react';

import { Form } from 'react-controlled-form'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { formReducer } from 'react-controlled-form'

import App from '../App'

const store = createStore(combineReducers({
  ...formReducer
}))

render((
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  /* your root DOM node */
)
const initialFields = {
  firstname: {
    isRequired: true
  },
  accepted_terms: {
    value: false,
    isValid: false,
    isRequired: true
  }
}

// Usage
<Form formId="user" initialFields={initialFields} render={...} />