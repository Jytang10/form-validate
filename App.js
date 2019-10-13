//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';

class Register extends Component {

  state = {
    name:''
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'black', padding:10}}>
          <Text style={{fontSize:25, color: 'white', alignSelf:'center'}}>Form Tutorial</Text>
        </View>
        <Hoshi value={this.state.name} onChangeText={name => this.setState({name})}></Hoshi>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});

export default Register;
