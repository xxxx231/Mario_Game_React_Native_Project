import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, Image, SafeAreaView, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import Camera from './Camera';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default class Choose extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible : false,
            char : this.props.char,
            uri : this.props.face,
            use : false,
            reqimg: this.props.char,
            question : require('../img/ques_sym.png')
        }
    } 

    componentDidUpdate(){
        if(this.state.use == false){
            if(this.state.uri != ''){
                this.setState({use: true})
                this.props.getimg(this.state.uri)
        }
        }
    }

    render(){
        return(
            <SafeAreaView style = {styles.container}>
                <View style = {styles.container}>
                    <View style={styles.box}></View>
                    <View>
                        <Image style={styles.character} source = {this.state.reqimg}>
                        </Image>
                        <Image style={this.state.use == true ? styles.img : styles.img_notuse} 
                        source = {this.state.use == true ?({uri : this.state.uri}) : (this.state.reqimg)}></Image>
                        <TouchableNativeFeedback style={styles.symbol} onPress={()=>this.change()}>
                            <Image style={styles.symbol} source = {this.state.question}>
                            </Image>
                        </TouchableNativeFeedback>
                    </View>
                    <BottomSheet
                        visible={this.state.visible}
                        onBackButtonPress={() => this.change()}
                        onBackdropPress={() => this.change()}
                    >
                        <View style={styles.bottomNavigationView}>
                            <Camera
                                uri = {this.state.uri}
                                geturi = {linkuri => this.setState({uri : linkuri})}>
                            </Camera>
                        </View>
                    </BottomSheet>
                </View>
            </SafeAreaView>     
        )
    }

    change(){
        this.setState({visible : !this.state.visible})
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingLeft: w*0.05,
        paddingTop: h*0.05,
        flexDirection: "column"
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    box :{
        width : 100,
        height: 80
    },
    character:{
        width: 105,
        height: 145,
        resizeMode : 'stretch'
    },
    img:{
        backgroundColor: 'black',
        borderRadius: 60,
        right : 290,
        top: 20,
        // left : 100,
        width: 60,
        height: 60,
        resizeMode : 'cover',
        position:'absolute'
    },
    img_notuse:{
        width:0,
        height:0
    },
    symbol:{
        width:50,
        height: 50,
        position:'absolute',
        right:250
        },
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        },
})

