import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import Clock from './Clock';
import Lap from './Lap';
import ButtonControllers from './ButtonControllers';
import {colors} from '../utilities/style';

export default function Home() {
  return (
    <View style={style.container}>
      <StatusBar hidden={true} />
      <View style={{flex: 48}}>
        <Clock />
      </View>
      <View style={{flex: 40}}>
        <Lap />
      </View>
      <View style={{flex: 12}}>
        <ButtonControllers />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
