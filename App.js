import React, { Component } from 'react';
import {validateAll} from 'indicative/validator';
import { View, Text, StyleSheet, Button} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';

class Register extends Component {

  state = {
    name:'',
    email:'',
    password:'',
    password_confirmation:''
  }

  registerUser = async(data) => {
    const rules = {
      name:'required|string',
      email:'required|email',
      password:'required|string|min:6|confirmed',
    }

    try {
      await validateAll(data, rules, message)
    } catch {

    }
  }

  render() {
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
