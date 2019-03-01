import * as React from 'react';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Button } from 'antd';
import GlobalErrorBoundary from './components/ErrorBoundaries/GlobalErrorBoundary';
import routeList from './routes';
import { IRoute, IChild } from './routes/index.d';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <GlobalErrorBoundary>
        <Link to="/">
          <Button type="primary">Home</Button>
        </Link>
        <Link to="/auth/login">
          <Button>Login</Button>
        </Link>
        <Link to="/about">
          <Button>About</Button>
        </Link>
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
  );
};

export default App;
