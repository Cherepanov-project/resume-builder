import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env["VITE_REACT_APP_AUTH0_DOMAIN"];
const clientId = import.meta.env["VITE_REACT_APP_AUTH0_CLIENT_ID"];

const Auth0ProviderWithRedirectCallback = ({ children, ...props }: { children: React.ReactNode } & Record<string, unknown>) => {
    const navigate = useNavigate();
    const onRedirectCallback = () => {
      navigate(window.location.pathname);
    };
    
    return (
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: `${window.location.origin}/intro/`
        }}
        onRedirectCallback={onRedirectCallback} {...props}>
        {children}
      </Auth0Provider>
    );
  };

export default Auth0ProviderWithRedirectCallback;