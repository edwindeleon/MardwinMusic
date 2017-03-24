
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
    return <Router>
      <Scene key="login" component={LoginView} hideNavBar />
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar />
        <Scene key="artistDetail" component={ArtistDetail} title="Comentarios" hideNavBar={false} />
      </Scene>
    </Router>
  }
}
AppRegistry.registerComponent('MardwinMusic', () => MardwinMusic);

