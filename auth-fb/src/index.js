import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthProvide from './store/AuthProvide';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvide>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvide>
);
