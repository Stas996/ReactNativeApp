import React from 'react';
import Login from './components/auth/login';
import PatientsList from './components/patients/patients-list';
import PatientsDetails from './components/patients/patient-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null 
    };
  }

  render() {
    if (!this.state.currentUser) {
      return (
        <Login onLogin={this._login}/>
      );
    }

    if (this.state.currentUser.patientId || this.state.currentUser.patientRelativeId) {
      return (
        <PatientsDetails />
      );
    }

    return (
      <PatientsList />
    );
  }

  _login = (currentUser) => {
    this.setState({
      currentUser: currentUser,
    });
  }
}
