import React from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { authService } from '../../services/authService';
import "@expo/vector-icons";

export default class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  _usernameChange = username => {
    this.setState({ username });
  };

  _passwordChange = password => {
    this.setState({ password }); 
  };

  _loginPress = () => {
    const credentials = Object.assign({}, this.state);
    authService.login(credentials)
    .then(result => {
      if(result.access_token){
        this.props.onLogin();
        return;
      }

      Alert.alert('Login error', 'Incorrect username or password');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Card title='Rythmos'>
          
          <TextInput
            placeholder='Login'
            value={this.state.username}
            onChangeText={this._usernameChange}
            style={{ width: 200, height: 44, padding: 8 }}
          />
          
          <TextInput
            placeholder='Password'
            value={this.state.password}
            onChangeText={this._passwordChange}
            style={{ width: 200, height: 44, padding: 8 }}
          />
          
          <Button
            title='Login'
            onPress={this._loginPress}
          />
        
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});