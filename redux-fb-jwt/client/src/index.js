import React from 'react';
import store from './components/store/index'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { getRefreshToken, getToken } from './utils/Helper';
import { fetchUserData } from './components/store/authThunk';
import { BrowserRouter } from 'react-router-dom';

// if(getToken()){
//   store.dispatch(fetchUserData())
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
