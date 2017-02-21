
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import ArtistBox from './ArtistBox'

export default class MardwinMusic extends Component {
  render() {
    const artist = { 
      image: 'https://lastfm-img2.akamaized.net/i/u/300x300/31a51f6e3ec647c8997150ec837891c7.png',
      name: 'David Bowie',
      likes: 200,
      comments: 30
  }
    return (
      <ScrollView style={styles.container}>
        {Array(500).fill(artist).map( artist => {
          return <ArtistBox artist={artist} />
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  }
});

AppRegistry.registerComponent('MardwinMusic', () => MardwinMusic);
