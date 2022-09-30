// import React from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import {App} from './App';
// import { store } from './components/toolkitRedux/Index';
import { store } from './store/store';
// import { rootStore } from './store/StasfetchSlices/rootStore';
import { AuthProvider } from './hooks/useAuth';

// import './firebase';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Router>
      {/* <Outlet/> */}
        <Provider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Provider>
      </Router>
  </React.StrictMode>
);



