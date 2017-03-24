import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import ArtistList from './ArtistList'
import { getArtists } from './api-client'

export default class HomeView extends Component {
  state = {
    artists: null
  }

  componentDidMount() {
    getArtists()
      .then(data => this.setState({ artists: data }))
  }

  render() {
    const artists = this.state.artists

    return (
      <View style={styles.container}>
        { !artists && <ActivityIndicator size="large" /> }
        { artists && <ArtistList artists={artists} /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.select({
      ios: 30,
      android: 10
    }),
  },
});