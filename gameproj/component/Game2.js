import React, {Component} from 'react';
import { ImageBackground, StyleSheet, Text, View, Animated, Dimensions, Image,TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Game from '../component/Game'
const hei_screen = (Dimensions.get('window').height);
const wid_screen = (Dimensions.get('window').width);
const photos1 = [require('../img/char1_1.png'), require('../img/char1_2.png')]
const photos2 = [require('../img/char2_1.png'), require('../img/char2_2.png')
]

export default class Game2 extends Component {
  constructor(props){
    super(props); 
    this.state = {
      score1 : 0,
      score2: 0,
      lose: 0,
      retry : require('../img/restart.png'),
      restart : false
    };
  }

  render(){
    console.log(this.state.lose)
      return (
        <View style = {styles.container}>
            <Game 
            bottomm = {150}
            imgplayer ={ '../img/char1_1.png'}
            imgobs = {this.props.face1}
            hei_back = {hei_screen / 2 + 20}
            two = {true}
            getscore = {score => this.setState({score1: score})}
            getgameover = {gameover => this.setState({lose: this.state.lose + 1})}
            restart = {this.state.restart}
            sizegameover = {200}
            photos = {photos1}
            ></Game>
            <Game 
            bottomm = {150}
            imgplayer ={ '../img/char1_1.png'}
            imgobs ={this.props.face2}
            hei_back = {hei_screen / 2 + 20}
            two = {true}
            getscore = {score => this.setState({score2: score})}
            getgameover = {gameover => this.setState({lose: this.state.lose + 1})}
            restart = {this.state.restart}
            sizegameover = {200}
            photos = {photos2}
            ></Game>
            <TouchableNativeFeedback style={this.state.lose == 2 ? styles.restart : styles.nothing}
                              onPress = {()=>this.changerestart()}
            >
              <Image style={this.state.lose == 2 ? styles.restart : styles.nothing}
              source = {this.state.retry}>
              </Image>
            </TouchableNativeFeedback>
            <Text style={this.state.lose == 2 && this.state.score1 > this.state.score2?styles.win:styles.nothing}>
              Player 1 wins!
            </Text>
            <Text style={this.state.lose == 2 && this.state.score1 < this.state.score2?styles.win:styles.nothing}>
              Player 2 wins!
            </Text>
            <Text style={this.state.lose == 2 && this.state.score1 == this.state.score2?styles.win:styles.nothing}>
              Tie!
            </Text>
        </View>
      );
  }
  changerestart(){
    this.setState({restart: true});
    this.setState({lose: 0})
  }
  changerestart_(){
    if (this.state.restart == true){
      this.setState({restart: false})
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.changerestart_();
    },50)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  half:{
    height: hei_screen/2-40,
    backgroundColor: 'red'
,
  },
  restart:{
    width: 160,
    height: 50,
    resizeMode: 'cover',
    justifyContent: "center",
    right: wid_screen/2-80,
    bottom: hei_screen/2-75,
    position: 'absolute',
  },
  nothing:{
    width:0,
    height:0
  },
  win:{
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
    width: wid_screen,
    backgroundColor: 'green',
    position:'absolute',
    color: 'white',
    letterSpacing: 1.5
  }
});
