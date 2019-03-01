import * as React from 'react';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import GlobalErrorBoundary from './components/ErrorBoundaries/GlobalErrorBoundary';
import routeList from './routes';
import { IRoute, IChild } from './routes/index.d';

const App: React.FunctionComponent = () => {
  return (
    // preview fluent ui
    // <Customizer {...FluentCustomizations}>
    <Router>
      <GlobalErrorBoundary>
        {/* <Link to="/">
          <PrimaryButton>Home</PrimaryButton>
        </Link>
        <Link to="/auth/login">
          <PrimaryButton>Login</PrimaryButton>
        </Link>
        <Link to="/about">
          <PrimaryButton>About</PrimaryButton>
        </Link> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routeList.map((item: IRoute) =>
              item.children.map((child: IChild) => {
                return <Route exact key={child.path} path={`${item.path}${child.path}`} component={child.component} />;
              })
            )}
          </Switch>
        </Suspense>
      </GlobalErrorBoundary>
    </Router>
    // </Customizer>
  );
};

export default App;
