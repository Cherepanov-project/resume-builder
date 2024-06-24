import { withAuthenticationRequired } from '@auth0/auth0-react';

export const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};