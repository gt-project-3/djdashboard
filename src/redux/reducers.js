import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import FormComponent from '../modules/form/form.component';

export default function createReducer(extraReducerObjects = {}) {
  return combineReducers({
    form: formReducer, 
    ...extraReducerObjects
  });
}

// const reducers = {
//   // ... your other reducers here ...
//   form: formReducer.plugin({
//     FormComponent: (state, action) => { // <------ 'account' is name of form given to reduxForm()
//       switch(action.type) {
//         case FormComponent:
//           return undefined;       // <--- blow away form data
//         default:
//           return state;
//       }
//     }
//   })
// }
// const reducer = combineReducers(reducers);
// const store = createStore(reducer);