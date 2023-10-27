import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Auth0Provider
    domain="dev-yfqmdpa6pxqkaht8.us.auth0.com"
    clientId="IuuDKVWtgZ0E8gJMfcoe9icBVF7I5PNz"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

    <App />

  </Auth0Provider>,
    
    );
