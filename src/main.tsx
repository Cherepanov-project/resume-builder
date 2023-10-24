import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import CvTemplate from './pages/CvTemplate/CvTemplate.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CvTemplate />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
);
