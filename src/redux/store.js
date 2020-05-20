
import { createStore } from 'redux'

import Reducer from './reducer';
import { default_state } from './default_state'




const store = createStore(
  Reducer,
  default_state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;