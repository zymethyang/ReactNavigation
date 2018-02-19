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
  View
} from 'react-native';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import { StackNavigator } from 'react-navigation';

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen }
})

export default SimpleApp;
