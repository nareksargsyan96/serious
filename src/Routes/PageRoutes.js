import React from 'react';
import { Route, Switch } from 'react-router-dom';
import mainRoutes from './mainRoutes';

const PageRoutes = () => {
  const newMainRoutest = [];
  mainRoutes.map((item) => {
    if (item.children) {
      newMainRoutest.push(item);
      item.children.map((it) => {
        return newMainRoutest.push(it);
      });
    } else {
      return newMainRoutest.push(item);
    }
    return item;
  });

  return (
    <Switch>
      {newMainRoutest.map((item) => (
        <Route key={item.name} exact={item.exact} path={item.path} component={item.component} />
      ))}
    </Switch>
  );
};

export default PageRoutes;
