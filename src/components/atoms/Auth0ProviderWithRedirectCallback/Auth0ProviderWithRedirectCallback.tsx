import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
      navigate((appState && appState.returnTo) || window.location.pathname);
    };
    
    return (
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        onRedirectCallback={onRedirectCallback} {...props}>
        {children}
      </Auth0Provider>
    );
  };

export default Auth0ProviderWithRedirectCallback;