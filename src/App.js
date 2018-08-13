// src/App.js

import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Card } from 'antd';
import ContactListPage from './pages/contact-list-page';

class App extends Component {
  render() {
    return (
      <Card>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Contacts List
          </NavLink>
          <NavLink
            className="item"
            activeClassName="active"
            exact
            to="/contacts/new"
          >
            Add Contact
          </NavLink>
        </div>
        <Route exact path="/" component={ContactListPage} />
      </Card>
    );
  }
}

export default App;
