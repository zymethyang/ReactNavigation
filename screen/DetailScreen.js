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



export default class DetailScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const { goBack } = this.props.navigation;

    return (
      <View>
        <Text>{params.username}</Text>
        <Button title="Go Back" onPress={() => { goBack() }} />
      </View>
    );
  }
}
