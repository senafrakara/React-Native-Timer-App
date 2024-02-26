import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../utilities/style';

const {height, width} = Dimensions.get('screen');

export default function Clock({time}) {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const displayTime = centiseconds => {
    let minutes = 0;
    let seconds = 0;

    if (centiseconds < 0) {
      centiseconds = 0;
    }

    if (centiseconds < 100) {
      return {
        minutes: '00',
        seconds: '00',
        miliseconds: padToTwo(centiseconds),
      };
    }

    let remainCentiseconds = centiseconds % 100;
    seconds = (centiseconds - remainCentiseconds) / 100;

    if (seconds < 60) {
      return {
        minutes: '00',
        seconds: padToTwo(seconds),
        miliseconds: padToTwo(remainCentiseconds),
      };
    }

    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;

    return {
      minutes: padToTwo(minutes),
      seconds: padToTwo(remainCentiseconds),
      miliseconds: padToTwo(remainCentiseconds),
    };
  };
  return (
    <View style={style.container}>
      <View style={style.roundContainer}>
        <Text style={{color: colors.color5}}>STOPWATCH</Text>

        <View style={style.counterContainer}>
          <View style={style.counterInnerContainer}>
            <Text style={style.timeText}>{displayTime(time).minutes}</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>min</Text>
          </View>
          <View>
            <Text style={style.timeText}>{displayTime(time).seconds}</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>sec</Text>
          </View>
          <View>
            <Text style={style.timeText}>{displayTime(time).miliseconds}</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>msec</Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundContainer: {
    backgroundColor: colors.color4,
    height: width - 150,
    width: width - 150,
    borderRadius: width - 150,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  counterInnerContainer: {
    alignItems: 'center',
  },
  timeText: {
    fontSize: 30,
    color: colors.color5,
  },
});
