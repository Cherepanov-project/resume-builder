import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env["VITE_REACT_APP_AUTH0_DOMAIN"];
const clientId = import.meta.env["VITE_REACT_APP_AUTH0_CLIENT_ID"];

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
    const navigate = useNavigate();
    const onRedirectCallback = (appState) => {
      navigate((appState && appState.returnTo) || window.location.pathname);
    };
    
    return (
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: 'http://localhost:5173/intro'
        }}
        onRedirectCallback={onRedirectCallback} {...props}>
        {children}
      </Auth0Provider>
    );
  };

export default Auth0ProviderWithRedirectCallback;