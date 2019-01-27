import React, { PureComponent, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Permissions from 'react-redux-permissions';
import { PREMIUM } from '../../actions/permissionTypes';


// const generateRoutes = (route, path) => {
//   if (!route.routes) {
//     return (
//       <Route
//         exact={route.exact}
//         key={path}
//         path={path}
//         component={route.component}
//       />
//     );
//   }
//
//   return Object.entries(route.routes).map(([_, r]) =>
//     generateRoutes(r, path + r.path)
//   );
// };
//
// export default class PrivateRoute extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       isAuthenticated: true
//     };
//   }
//
//   render() {
//     const { isAuthenticated } = this.state;
//     const { routes, notAuthenticated } = this.props;
//     if (isAuthenticated) {
//       return (
//         <Fragment>
//           {Object.entries(routes).map(([_, route]) =>
//             generateRoutes(route, route.path)
//           )}
//         </Fragment>
//       );
//     } else {
//       return <Redirect to={notAuthenticated}/>;
//     }
//   }
// }

export class PrivateRoutes extends PureComponent {
  state = {
    resolvedRoutes: [],
  };

  reduceRoutes = (route, path = '') => {
    if (route.component) {
      return [{
        path: path + route.path,
        component: route.component,
        extraProps: route.extraProps || {},
      }];
    } else {
      let routeAbstraction = [];
      Object.values(route).forEach(item => {
        if (item instanceof Object) {
          routeAbstraction = routeAbstraction.concat(
            this.reduceRoutes(
              item,
              path + (route.path || '')
            )
          );
        }
      });
      return routeAbstraction;
    }
  };

  componentDidMount() {
    const { routes } = this.props;
    this.setState({
      resolvedRoutes: this.reduceRoutes(routes),
    });
  }

  render() {
    const { resolvedRoutes } = this.state;

    return (
      <Fragment>
        {
          resolvedRoutes.map(route => (
            <Permissions
              allowed={[PREMIUM]}
              fallbackElement={() => <div>you dont have the required permissions</div>}
            >
              <Route
                path={route.path}
                key={route.path}
                component={route.component}
                {...route.extraProps}
              />
            </Permissions>
          ))
        }
      </Fragment>
    );
  }
}
