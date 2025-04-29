import React from "react";
import { Route, Redirect } from "wouter";

// Typ för props till ProtectedRoute
type ProtectedRouteProps = {
  path: string;
  component: React.FC;
};

// Dummy authentication check
const useAuth = () => {
  const user = null; // TODO: koppla till riktig auth här om du vill senare
  return { user };
};

// Själva komponenten
export function ProtectedRoute({ path, component: Component }: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return (
      <Route path={path}>
        <Redirect to="/auth" />
      </Route>
    );
  }

  return (
    <Route path={path} component={Component} />
  );
}
