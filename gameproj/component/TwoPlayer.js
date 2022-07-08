import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import Choose from './Choose'
import Game from './Game'

const hei_screen = (Dimensions.get('window').height);
const wid_screen = (Dimensions.get('window').width);

export default class TwoPlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            avatarplayer : '../img/char1_1',
            face : '',
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
                <ImageBackground source = {this.state.imgbr} style = {styles.imgbackground}></ImageBackground>
                    <Choose
                    char = {this.state.avatarplayer}
                    face = {''}
                    getimg = {linkuri => this.setState({face : linkuri})}>
                    </Choose>
                    <View style = {styles.box}></View>
                    <View style = {styles.box}></View>

                    <Choose
                    char = {this.state.avatarplayer}
                    face = {''}
                    getimg = {linkuri => this.setState({face : linkuri})}>
                    </Choose>
                    <View style = {styles.box}></View>
                    <View style = {styles.box}></View>
                    <View style = {styles.box}></View>

                    <TouchableOpacity style = {styles.start} onPress={()=>{this.startGame()}}>
                        <Image style = {styles.start} source = {this.state.start}></Image>
                    </TouchableOpacity>
            </View>
        );
        }
        else{
            return(
                <View style={styles.container}>
                        <Game 
                        imgplayer ={ '../img/char1_1.png'}
                        imgobs={this.state.face}
                        ></Game>
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
    height: hei_screen,
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover"
},
  start:{
    width: 150,
    height: 80,
    right: 0, 
    top: 220,
    position: 'absolute'
  },
  box:{
    width:100,
    height:100
  }
});