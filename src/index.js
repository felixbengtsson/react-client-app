import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

import AppNavbar from './components/layout/AppNavbar'
import Dashboard from './components/layout/Dashboard'
import AddClient from './components/clients/AddClient'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route exact path="/client/add" component={AddClient}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
