import { ConnectedComponentClass } from "react-redux";

export interface IChild {
  title: string;
  path: string;
  component:  React.LazyExoticComponent<React.FunctionComponent<{}>> | React.LazyExoticComponent<ConnectedComponentClass<any, Pick<{}, never>>>;
}

export interface IRouteList extends Array<IRoute> {
  [index: number]: IRoute;
}

export interface IRoute {
  key: string;
  title: string;
  path: string;
  children?: IChildren;
}

export interface IChildren extends Array<IChild> {
  [index: number]: IChild;
}
