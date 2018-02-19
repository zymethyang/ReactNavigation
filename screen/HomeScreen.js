/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';



export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="PUSH ME" onPress={() => { navigate('Detail', { username: 'String' }) }} />
      </View>
    );
  }
}
