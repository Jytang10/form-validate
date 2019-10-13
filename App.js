import React, { Component } from 'react';
import {validateAll} from 'indicative/validator';
import { View, Text, StyleSheet, Button} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';
import Axios from 'axios';

class Register extends Component {

  state = {
    name:'',
    email:'',
    password:'',
    password_confirmation:'',
    userData:''
  }

  registerUser = async(data) => {
    const rules = {
      name:'required|string',
      email:'required|email',
      password:'required|string|min:6|confirmed',
    }

    const messages = {
      required: (field) => `${field} is required`,
      'email.email': 'The email syntax is wrong',
      'password.confirmed': 'THe password did not match',
      'password.min': 'Password is too short'
    }

    try {
      await validateAll(data, rules, messages)
      const response = await Axios.post('https://react-blog-api.bahdcasts.com/api/auth/register',{
        name:data.name,
        email:data.email,
        password:data.password
      })

      this.setState({
        userData: response
      })
    } catch {

    }
  }

  render() {
    console.log()
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'black', padding:10, marginBottom:20}}>
          <Text style={{fontSize:25, color: 'white', alignSelf:'center'}}>Form Tutorial</Text>
        </View>
        <Hoshi 
          style={{marginBottom:20}}
          label={"name"}
          backgroundColor={'#fff'}
          borderColor={'#b76c94'}
          borderHeight={3}
          inputPadding={16}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          >
        </Hoshi>
        <Hoshi
          style={{marginBottom:20}}
          label={"email"}
          backgroundColor={'#fff'}
          borderColor={'#b76c94'}
          borderHeight={3}
          inputPadding={16}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          >
        </Hoshi>
        <Hoshi
          style={{marginBottom:20}}
          label={"password"}
          secureTextEntry
          backgroundColor={'#fff'}
          borderColor={'#b76c94'}
          borderHeight={3}
          inputPadding={16}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          >
        </Hoshi>
        <Hoshi 
          label={"Reconfirm password"}
          secureTextEntry
          backgroundColor={'#fff'}
          borderColor={'#b76c94'}
          borderHeight={3}
          inputPadding={16}
          style={{marginBottom:45}}
          value={this.state.password_confirmation}
          onChangeText={password_confirmation => this.setState({password_confirmation})}
          >
        </Hoshi>
        <Button title="Register" onPress={() => this.registerUser(this.state)}> </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
});

export default Register;
