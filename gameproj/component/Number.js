import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native';

const hei_screen = (Dimensions.get('window').height);
const wid_screen = (Dimensions.get('window').width);


export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgbr : require('../img/background.png'),
            oneplayer : require('../img/1player.png'),
            twoplayer : require('../img/2player.png')

        }
    }

  render(){
    return (
            <View style = {styles.container}>
                <SafeAreaView style = {styles.container}>
                    <Image source = {this.state.imgbr} style = {styles.imgbackground}></Image>
                    {/* <View style = {styles.box}></View> */}
                    <View style = {styles.box}>
                        <TouchableOpacity style = {styles.select}
                        onPress={() => this.props.navigation.navigate('1Player', { name: 'Jane' })}
                        >
                            <Image source = {this.state.oneplayer} style = {styles.select}></Image>
                        </TouchableOpacity>
                        <View style = {styles.box2}></View>
                        <TouchableOpacity style = {styles.select}
                        onPress={() => this.props.navigation.navigate('2Player', { name: 'x' })}
                        >
                            <Image source = {this.state.twoplayer} style = {styles.select}></Image>
                        </TouchableOpacity>
                    </View>

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
        resizeMode: "cover"
    },
    box:{
        position:'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box2:{
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    select: {
        width: 300,
        height: 80,
        justifyContent: "center",
        resizeMode: "stretch",
        // position:'absolute'
    }
    
  });
  