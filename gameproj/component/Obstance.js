import React, {Component} from 'react';
import {View, Image, Text, TouchableWithoutFeedback, Animated, StyleSheet, Dimensions} from 'react-native';
import Img from './Img.js'

// const bt = -(window.innerHeight/2-40);
const bt = -((Dimensions.get('window').height)/2-10);


export default class Obstance extends Component{
  constructor(props){
    super(props);
    this.state={
      bot : -this.props.bottomm +50
    }
  }
  render(){
    return(
        <Animated.View 
        style = {{bottom : this.state.bot, transform : [ {translateX: this.props.enemy}] }}>
            <Image style = {styles.img}
            source = {require('../img/enemy.png')}>
            </Image>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  img: {
    width: 50, 
    height: 50
  }
});
