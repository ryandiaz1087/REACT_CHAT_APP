import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';

const Root = () => {
  const main = (
    <Switch>
      <Route path="/" exact component={Join}/>
      <Route path="/Chat" component={Chat}/>
    </Switch>
  );

  return <main>{main}</main>;
}

export default Root;
