import React, {Component} from 'react';
import { PanResponder, ImageBackground, StyleSheet, Text, View, Animated, Dimensions, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Player from './Player';
import Obstance from './Obstance.js'

const hei_screen = (Dimensions.get('window').height);
const wid_screen = (Dimensions.get('window').width);
const bt = (Dimensions.get('window').height)/2;
const l = (Dimensions.get('window').width)/2;

export default class Game extends Component {
  constructor(props){
    super(props); 
    this.state = {
      bottomm : props.bottomm,
      avatarplayer: props.imgobs,
      player: new Animated.Value(props.bottomm),
      enemy : new Animated.Value(l+250),
      gameOver : false,
      imgbr : require('../img/background.png'),
      gOv : require('../img/gameover.png'),
      retry : require('../img/restart.png'),
      score: 0,
      speech : 2500,
      hei_img : this.props.hei_back,
      photo : this.props.photos
    };
  }
  onTouchStart(event){
    this.setState({ active: true });
    this.props.onPressIn && this.props.onPressIn();
}

  restart(){
    this.setState({player: new Animated.Value(this.props.bottomm)});
    this.setState({enemy: new Animated.Value(l+250)});
    this.setState({score: 0});
    this.setState({speech : 2500});
    this.setState({gameOver: false})
  }

  render(){
    // console.log(this.state.photo)
      return (
        <View style = {styles.container}>
          <ImageBackground source = {this.state.imgbr} 
          style = {{width: wid_screen,
            flex: 1,
            justifyContent: "center",
            resizeMode: "cover",
            height: this.state.hei_img}}></ImageBackground>
          <Player style={{position: 'absolute'}}
          avatar = {this.state.avatarplayer}
          player = {this.state.player}
          gameOver = {this.state.gameOver}
          bottom = {this.state.bottomm}
          photo = {this.state.photo}
          />
          <Obstance style={{position: 'absolute'}}
          enemy = {this.state.enemy}
          bottomm = {this.state.bottomm}
          />
          <View
            style={styles.jump} 
            onStartShouldSetResponderCapture = {() => this.state.gameOver == false ? this.jump():{}}>
          </View>
          <View style = {styles.endGame}>
            <Image 
            style={this.state.gameOver == true ? 
              { width: this.props.sizegameover,
                height: this.props.sizegameover,
                right: this.props.sizegameover == 200 ? wid_screen/2 -  300 : wid_screen/2 - 200,
                justifyContent: "center",}
              :styles.nothing}
            source = {this.state.gOv}>
            </Image>
            <TouchableNativeFeedback
            style={this.state.gameOver == true ? styles.restart:styles.nothing}
            onPress={()=>{this.restart()}}>
              <Image 
              style={this.state.gameOver == true && this.props.two == false ? styles.restart:styles.nothing}
              source = {this.state.retry}>
              </Image>
            </TouchableNativeFeedback>
          </View>
          <Text style={styles.score}>{this.state.score}</Text>
        </View>
      );
  }

  jump(){
    Animated.timing(this.state.player,
      {
        toValue : this.state.bottomm - 150,
        duration : 300,
        useNativeDriver : false,
      }).start()
      setTimeout(() => {
        Animated.timing(this.state.player,{
          toValue: this.state.bottomm,
          duration : 300,
          useNativeDriver : false
        }).start()
      },300)
  }
  componentDidMount(){
    if(this.state.gameOver == false){
      this.moveEnemy();
    }
  }

  restartfortwo(){
    setInterval(()=>{
      if(this.state.gameOver == true){
        if(this.props.restart == true){
          this.restart();
        }
      }
    }, 5)
  }


  end(){
    this.state.enemy.stopAnimation(this.callback);
    this.state.player.stopAnimation(this.callback);
  }

  countScore(){
    setInterval(() => {
      if(this.state.gameOver == false){
        this.setState({score: this.state.score + 1})
        this.setState({speech : Math.floor(this.state.speech - 0.01*this.state.score)})
      }
    }, 500);
    return this.state.score
  }

  check(){
    setInterval(() => {
      if(this.state.gameOver == false){
        if(this.state.enemy._value <= 80 && this.state.enemy._value >= 0 && this.state.player._value >= this.state.bottomm - 50){
          this.setState({gameOver:true})
          this.props.getscore(this.state.score)
          this.props.getgameover(this.state.gameOver)
          this.end()
        }
     }
    }, 5)
  }

  moveEnemy(){
      this.check(); 
      this.countScore();

      var run;
      run = setInterval(() =>{
        if (this.state.gameOver == false){
          // console.log(this.state.speech)
      Animated.loop(
        Animated.timing(this.state.enemy,{
          toValue: -(l+500),                                                                    
          duration : this.state.speech,
          useNativeDriver : false
        })).start()}
      }, 
      this.state.speech > 2000 ? 1500 : (this.state.speech > 1500 ? 1200 :(this.state.speech > 1200 ? 1100 : 700))
      )

    this.restartfortwo();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },

  jump: {
    width: wid_screen,
    height: hei_screen,
    backgroundColor : 'rgba(255,255,255,0.01)'
  },

  nothing:{
    width:0,
    height:0
  },
  score:{
    position:'absolute',
    color: 'white',
    right: 0,
    fontSize: 30
  },
  restart:{
    width: 160,
    height: 50,
    resizeMode: 'cover',
    justifyContent: "center",
    right: -wid_screen/2+80
  },
  endGame:{
    flex: 1,
    position: 'absolute',
    justifyContent: "center",
    alignContent: 'center'
  }


});
