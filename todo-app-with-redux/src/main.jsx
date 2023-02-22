import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { legacy_createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import todoReducer from './reducers/todoReducer'

const store = legacy_createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/**
 * Store - Håller vårt globala state
 * Reducers - Uppdaterar vårt state i store
 * Actions - Säger vad vi ska uppdatera
 * useDispatch - Triggar igång en action och skickar med vad vi vill uppdatera store med
 * useSelector - "Prenumererar" på uppdatering från store och hämtar data därifrån
 * 
 * useDispatch och useSelector körs från komponenter
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)