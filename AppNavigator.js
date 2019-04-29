import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import AuthenticationScreen from './AuthenticationScreen';
import FaceAuth from './FaceAuth';
import VoiceAuth from './VoiceAuth';

const AppNavigator = createStackNavigator({
    Login : LoginScreen,
    Auth: AuthenticationScreen,
    Face: FaceAuth,
    Voice: VoiceAuth,
    Home: HomeScreen
},
{
    initialRouteName: "Login"
},
{
navigationOptions: {
    header: null 
  }
})

export default createAppContainer(AppNavigator);