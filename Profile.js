import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Profile extends Component {

  render() {
    // console.log('Profile.js', this.props.navigation.state.params)
    const params = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Text style={{fontWeight:'bold', fontSize:20, marginBottom:20}}>{params.name}</Text>
        <Text>Your Account is created with</Text>
        <Text style={{fontWeight:'bold', fontSize:20, marginBottom:20}}>{params.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Profile;
