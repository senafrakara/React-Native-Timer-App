import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../utilities/style';

const {height, width} = Dimensions.get('screen');

export default function ButtonControllers({
  isRunning,
  handleStart,
  handleLap,
  handleStop,
}) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={[style.buttonContainer, {backgroundColor: colors.color4}]}
        onPress={() => handleStop()}>
        <Icon name="stop" color={'#fff'} size={15} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[style.buttonContainer, {backgroundColor: colors.color2}]}
        onPress={() => handleStart()}>
        <Icon
          name={isRunning ? 'pause' : 'play'}
          color={colors.color3}
          size={15}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[style.buttonContainer, {backgroundColor: colors.color4}]}
        onPress={() => handleLap()}>
        <Icon name="step-forward" color={'#fff'} size={15} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: width,
    marginBottom: 20,
  },
  buttonContainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
