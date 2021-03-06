import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, Animated, StyleSheet, Dimensions} from 'react-native';
import Img from './Img.js'

// const l = -(window.innerWidth/2-100);
const l = -((Dimensions.get('window').width)/2 - 100) ;

const photos = [require('../img/char1_1.png'), 
require('../img/mario.png')];

export default class Player extends Component{
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      avatar : props.avatar,
      photos : props.photo
    }
  }

  render(){
    return(
      <Animated.View
        style = {
          {
            transform : [ {translateY: this.props.player}] }}>
          <Img style ={{position : 'absolute'}}
          props = {this.props}
          char = {photos[this.state.count]}
          avatar = {this.state.avatar}
          photos = {this.state.photos}>
          </Img>
      </Animated.View>
    )
  }


}
