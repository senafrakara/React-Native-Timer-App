import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utilities/style';

const {height, width} = Dimensions.get('screen');

export default function Lap({results}) {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const displayTime = centiseconds => {
    let minutes = 0;
    let seconds = 0;

    if (centiseconds < 0) {
      centiseconds = 0;
    }

    let remainCentiseconds = centiseconds % 100;
    seconds = (centiseconds - remainCentiseconds) / 100;

    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;

    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}:${padToTwo(
      remainCentiseconds,
    )}`;
  };

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.titleText}>Lap Time</Text>
        <Text style={style.titleText}>Lap No</Text>
      </View>

      <FlatList
        data={results}
        renderItem={item => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: width,
                marginVertical: 10,
              }}>
              <Text style={{color: 'white'}}>{displayTime(item.item)}</Text>
              <Text style={{color: 'white'}}>
                {results.length - item.index}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    backgroundColor: colors.color4,
    paddingVertical: 10,
  },
  titleText: {
    color: colors.color5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
