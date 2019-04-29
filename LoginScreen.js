import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, 
  Dimensions, TouchableOpacity } from 'react-native';
import bgimage from './login_bg.jpg';
import logo from './logo.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

const {width: WIDTH} = Dimensions.get('window')
export default class LoginScreen extends React.Component {

  constructor(){
    super()
    this.state = {
      isUsernameEmpty: true
    }
  }

  handleChange(){
    if( (this.user_input.value==='undefined') || (this.user_input.value==='')){
      this.setState({isUsernameEmpty: true})
    }else{
      this.setState({isUsernameEmpty: false})
    }
  }


  render() {
    return (
      <ImageBackground source={bgimage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>Wells Fargo Bank</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'}
          style={styles.inputIcon} />
          <TextInput style={styles.input}
            placeholder={'Username'}
            id='username'
            ref={(c) => this.user_input = c}
            onSubmitEditing={this.handleChange.bind(this)}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>
      
        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text} disabled={this.state.isUsernameEmpty} onPress={() => this.props.navigation.navigate('Auth')}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text} >Register</Text>
          </TouchableOpacity>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      alignItems: 'center',
      justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 70
  },
  logo: {
    width: 120,
    height: 120
  },
  logoText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
    opacity: 0.8
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});
