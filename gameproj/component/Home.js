import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Number from '../component/Number'

const hei_screen = (Dimensions.get('window').height);
const wid_screen = (Dimensions.get('window').width);


export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgbr : require('../img/home.jpg'),
            play : require('../img/play.png')

        }
    }

  render(){
    return (
            <View style = {styles.container}>
                <SafeAreaView style = {styles.container}>
                    <Image source = {this.state.imgbr} style = {styles.imgbackground}></Image>
                    <TouchableOpacity style = {styles.select} 
                    onPress={() => this.props.navigation.navigate('1Player', { name: 'Jane' })}>
                        <Image source = {this.state.play} style = {styles.select} ></Image>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
        flex :1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgbackground :{
        width: wid_screen,
        height: hei_screen,
        flex: 1,
        justifyContent: "center",
        resizeMode: "stretch"
    },
    select: {
        width: 400,
        height: 400,
        justifyContent: "center",
        resizeMode: "stretch",
        position:'absolute'
    },
    
  });
  