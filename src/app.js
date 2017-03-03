
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View, 
  Platform,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux'

import LoginView from './LoginView'
import HomeView from './HomeView'
import ArtistDetail from './ArtistDetailView'

 class MardwinMusic extends React.Component {
  render() {
    const isAndroid = Platform.OS === 'android'

    return <Router>
      <Scene key="login" component={LoginView} hideNavBar />
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar />
        <Scene key="artistDetail" component={ArtistDetail} hideNavBar={isAndroid} />
      </Scene>
    </Router>
  }
}
AppRegistry.registerComponent('MardwinMusic', () => MardwinMusic);

