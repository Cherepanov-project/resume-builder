import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
      navigate((appState && appState.returnTo) || window.location.pathname);
    };
    
    return (
      <Auth0Provider
        domain='dev-xpamu0sjzvg4op05.us.auth0.com'
        clientId='mL5a2XeX6vnThXTKJKrHHbz1ePaLKwO7'
        onRedirectCallback={onRedirectCallback} {...props}>
        {children}
      </Auth0Provider>
    );
  };

export default Auth0ProviderWithRedirectCallback;