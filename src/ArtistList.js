/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
} from 'react-native';

import ArtistBox from './ArtistBox'

export default class ArtistList extends Component {
  
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => {
      r1 !== r2
    }})
    this.state = {
      dataSource: ds
    }
  }

  componentDidMount() {
    this.updateDataSource(this.props.artists)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.artists !== this.props.artists) {
      this.updateDataSource(newProps.artists)
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(artist) => <ArtistBox artist={artist} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});