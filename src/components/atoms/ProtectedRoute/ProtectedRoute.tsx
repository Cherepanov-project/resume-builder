import { withAuthenticationRequired, WithAuthenticationRequiredOptions } from '@auth0/auth0-react';

interface ProtectedRouteProps extends WithAuthenticationRequiredOptions {
  component: React.ComponentType;
}

export const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};