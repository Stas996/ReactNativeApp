import React from 'react';
import { View, Button, ScrollView, Text } from 'react-native';
import { List, ListItem, Header } from 'react-native-elements'

import { Patient } from '../shared/models/patient';
import { patientService } from '../shared/services/patient.service';

export default class PatientDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    };
  }

  _setPatients = patients => {
    this.setState({ patients });
  }

  componentDidMount() {
    patientService.listAll()
    .then(patients => this._setPatients(patients));
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Patients', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <List>      
            <ScrollView>
              {
                this.state.patients.map((item, i) => (
                  <ListItem
                    key={item.id}
                    title={item.firstName + ' ' + item.lastName}
                    subtitle={
                      <View>
                        <Text>{item.email}</Text>
                      </View>
                    }
                  />
                ))
              }         
            </ScrollView>
        </List>
      </View>
    );
  }
}
