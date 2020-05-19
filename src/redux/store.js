
import { createStore } from 'redux'

import Reducer from './reducer';
import { default_state } from './actions'




const store = createStore(
  Reducer,
  default_state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;