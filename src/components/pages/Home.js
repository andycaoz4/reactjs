import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import '../../css/home.css';

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
  }

  checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async() => {
    this.props.auth.login('/');
  }

  logout = async() => {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const mainContent = this.state.authenticated ? (
        <div>
            <p className="lead">You have been authenticated. <br /><Link to="/main">Click here to internal links</Link></p>
            <button className="btn btn-light btn-lg" onClick={this.logout}>Logout</button>
        </div>
    ) : (
        <div>
            <p className="lead">If you are a staff member, please get your credential from your supervisor</p>
            <button className="btn btn-dark btn-lg" onClick={this.login}>Login</button>
        </div>
    );


    return (
      <div className="jumbotron">
      <div className="row">
        <div className="col-12 col-md-8">
          <h1 className="display-4"><strong>accenture webapp</strong></h1>
          {mainContent}
        </div>
      </div>
        
      </div>
    );
  }
});
