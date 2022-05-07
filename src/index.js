import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain={'dev-psmndwng.us.auth0.com'}
  clientId={'cyCgYevnzEWv6CpS7mkWwMMSgjR2lHDm'}
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);


