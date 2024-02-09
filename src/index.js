import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
  domain="dev-c83pp5fsdb43s3to.us.auth0.com"
  clientId="ll1PZVtUIzT6THORi9nB2hv1KWhjlmnB"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
  
);

reportWebVitals();
