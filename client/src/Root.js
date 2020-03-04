import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';

const Root = () => {
  return (
    <Switch>
      <Route path="/" exact component={Join}/>
      <Route path="/Chat" exact component={Chat}/>
    </Switch>
  );
}

export default Root;
