import React from 'react';
import Login from './components/auth/login';
import PatientsList from './components/patients/patients-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    if (!this.state.isAuthenticated) {
      return (
        <Login onLogin={this._login}/>
      );
    }

    return (
      <PatientsList token={this.state.token} />
    );
  }

  _login = () => {
    this.setState({
      isAuthenticated: true,
    });
  }
}
