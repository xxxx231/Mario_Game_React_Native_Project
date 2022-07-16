import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, Animated, Dimensions, TouchableOpacity } from 'react-native';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default class Img extends Component {
  constructor(props){
    super(props); 
    this.state = {
      avatar : props.avatar == ''?require('../img/mario.png'):props.avatar,
      count : 0,
      photo : props.photos
    };
  }

  render(){
    return(
    <View style={styles.container}>
      <View style = {styles.box}></View>
      <View>
        <Image style = {styles.character} source = {this.state.photo[this.state.count]}></Image>
        <Image style = {this.props.avatar == '' ?styles.not :styles.avatar} 
        source = {this.props.avatar == '' ? this.state.avatar:{uri:this.state.avatar}}></Image>
      </View>
    </View>
    )
  }

  run(){
    setInterval(()=>{
      if (this.props.props.gameOver == false){
        if (this.state.count == 1){
          this.setState({count: 0})
        }
        else{
          this.setState({count: this.state.count + 1})
        }}
      }, 200)
  }
  componentDidMount = ()=>{
        this.run();
  }

}

const styles = StyleSheet.create({
  container: {

  },
  box:{
    width: 100,
    height: 40
  },
  jump: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  character:{
    width: 80,
    height: 100,
    resizeMode : 'cover',
},
avatar:{
    borderRadius: 60,
    width: 40,
    height: 40,
    top: 20,
    right: 350,
    resizeMode : 'cover',
    position:'absolute'
},
not:{
  width:0,
  height:0
}
});
