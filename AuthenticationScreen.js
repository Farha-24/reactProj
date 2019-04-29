import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const {width: WIDTH} = Dimensions.get('window')
export default class AuthenticationScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.heading}>Select the mode of authentication</Text>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Face')}>Face Auth</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Voice')}>Voice Auth</Text>
            </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20
    },
    heading: {
        paddingLeft: 20,
        paddingBottom: 30,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 30
    },
    btn: {
        width: WIDTH -55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 40
      },
      text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        textAlign: 'center'
      }
})