import React from 'react';
import {
  Dimensions,
  Image,
  Slider,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button
} from 'react-native';
import { Audio, FileSystem, Font, Permissions } from 'expo';
import {Recorder, Player} from 'react-native-audio-player-recorder-no-linking';

export default class VoiceAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
      <Recorder
    style={{ flex: 1 }}
    onComplete={this.recorderComplete}
    maxDurationMillis={150000}
    showDebug={false}
    showBackButton={true}
    audioMode={{
        allowsRecordingIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        playsInSilentLockedModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid:
        Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false
    }}
    resetButton={(renderProps) => {
        return (
        <Button
            onPress={renderProps.onPress}
            style={{ marginVertical: 5 }}
            title="Reset"
        >
            <Text>Reset</Text>
        </Button>
        );
    }}
    recordingCompleteButton={(renderProps) => {
        return (
            <Button
                onPress={renderProps.onPress}
                title="Finish"
                style={{ marginVertical: 5 }}
            >
                <Text>Finish</Text>
            </Button>
            );
    }}
    playbackSlider={(renderProps) => {
        console.log({'maximumValue: ': renderProps.maximumValue});
        return (
        <Slider
            minimimValue={0}
            maximumValue={renderProps.maximumValue}
            onValueChange={renderProps.onSliderValueChange}
            value={renderProps.value}
            style={{
            width: '100%'
            }}
        />
        );
    }}
/>
    );
  }
}

const styles = StyleSheet.create({
});
