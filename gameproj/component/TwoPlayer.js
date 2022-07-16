import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,TouchableNativeFeedback, Image, Dimensions, ImageBackground } from 'react-native';
import Choose from './Choose'
import Game2 from './Game2'

const hei_screen = (Dimensions.get('window').height);
const wid_screen = (Dimensions.get('window').width);

export default class TwoPlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            player2 : require('../img/char2_1.png'),
            avatarplayer : require('../img/char1_1.png'),
            face : '',
            face2 : '',
            gameStart : false,
            start : require('../img/start.png'),
            imgbr : require('../img/background.png'),
        }
    }

    startGame(){
        this.setState({gameStart : true})
    }
    render(){
        if (this.state.gameStart == false){
        return (
            <View style={styles.container}>
              <View style = {styles.half}>
                <ImageBackground source = {this.state.imgbr} style = {styles.imgbackground}></ImageBackground>
                    <Choose
                    char = {this.state.avatarplayer}
                    face = {''}
                    getimg = {linkuri => this.setState({face : linkuri})}>
                    </Choose>
              </View>
              <View style = {styles.half}>
                <ImageBackground source = {this.state.imgbr} style = {styles.imgbackground}></ImageBackground>
                    <Choose
                    char = {this.state.player2}
                    face = {''}
                    getimg = {linkuri => this.setState({face2 : linkuri})}>
                    </Choose>
              </View>
                    <View style = {styles.box}></View>
                    <TouchableNativeFeedback style = {styles.start} onPress={()=>{this.startGame()}}>
                        <Image style = {styles.start} source = {this.state.start}></Image>
                    </TouchableNativeFeedback>
            </View>
        );
        }
        else{
            return(
                <View style={styles.container}>
                        <Game2
                        face1 = {this.state.face}
                        face2 = {this.state.face2}
                        ></Game2>                 
                </View>

            )
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  text :{
    width : 50,
    height: 100
  },
  choose : {
    flex: 1,
    width : 300, 
    height : 300
  },
  imgbackground :{
    width: wid_screen,
    height: hei_screen/2-20,
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    position: 'absolute'
},
  start:{
    width: 150,
    height: 80,
    right: 0, 
    top: 500,
    position: 'absolute'
  },
  box:{
    width:100,
    height:100
  },
  half:{
    height: hei_screen/2 - 40,
    //width: wid_screen/2,
    // backgroundColor: 'black'

  }
});