import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Main from './components/pages/Main';
import Youtubeplayer from './components/pages/Youtubeplayer';
import TableFilter from './components/pages/TableFilter';
import Login from './components/auth/Login';
import './App.css';

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Security issuer='https://dev-576060.okta.com/oauth2/default'
                  client_id='0oa9hzxdkpKNZorto356'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} > */}
          <Security issuer='https://dev-576060.okta.com/oauth2/default'
          client_id='0oa9hzxdkpKNZorto356'
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired} >
        <div className="App">
          <Navbar />
          <div className="container">
          <Route path = "/" exact={true} component={Home} />
          <SecureRoute path = "/main" exact={true} component={Main} />
          <SecureRoute path = "/youtubeplayer" exact={true} component={Youtubeplayer} />
          <SecureRoute path = "/tablefilter" exact={true} component={TableFilter} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-576060.okta.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
          </div>
        </div>
        </Security>
      </Router>
    );
  }
}


export default App;
