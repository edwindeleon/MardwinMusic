import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import { firebaseAuth, firebaseDatabase } from './firebase'
import ArtistBox from './ArtistBox'
import CommentList from './CommentList'

export default class ArtistDetailView extends Component {
  state = {
    comments: []
  }
  getArtistRef = () => {
    const { id } = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`)
  }
  handleSend = () => {
    const { text } = this.state
    const { uid, photoURL } = firebaseAuth.currentUser
    const artistCommentsRef = this.getArtistCommentsRef()

    var newCommentRef = artistCommentsRef.push()
    newCommentRef.set({
      text,
      userPhoto: photoURL,
      uid
    });
    this.setState({ text: '' })
   // this.newComment()
  }

  //newComment = () => {
  //  this.getArtistRef().transaction(function (comments) {
  //    if (comments) {
  //      if (comments.commentCount) {
  //        comments.commentCount++;
  //      } else {
  //        comments.commentCount = 1;
  //      }
  //      
  //    }
  //    return comments || {
  //      commentCount: 1
  //    }
  //  })
  //}

  getArtistCommentsRef = () => {
    const { id } = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`)
  }

  handleChangeText = (text) => this.setState({text})

  componentDidMount() {
    this.getArtistCommentsRef().on('child_added', this.addComment)

    this.getArtistCommentsRef().once('value', snapshot => {
      let comments = {comments:[]}
      snapshot.forEach( comment => {
        comments.comments = comments.comments.concat(comment.val())
      })
      this.setState({
        comments: comments.comments
      })
    })  
  }

  addComment = (data) => {
    const comment = data.val()
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }

  componentWillUnmount() {
    this.getArtistCommentsRef().off('child_added', this.addComment)
  }

  render() {
    const artist = this.props.artist
    const { comments } = this.state

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <CommentList comments={comments} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            placeholder="Opina sobre este artista"
            onChangeText={this.handleChangeText}
          />
          <TouchableOpacity onPress={this.handleSend}>
            <Icon name="ios-send-outline" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70,
  },
  inputContainer: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 50,
    flex: 1
  }
});