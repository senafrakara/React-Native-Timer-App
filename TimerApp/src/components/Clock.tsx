import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../utilities/style';

const {height, width} = Dimensions.get('screen');

export default function Clock() {
  return (
    <View style={style.container}>
      <View style={style.roundContainer}>
        <Text style={{color: colors.color5}}>STOPWATCH</Text>

        <View style={style.counterContainer}>
          <View style={style.counterInnerContainer}>
            <Text style={style.timeText}>07</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>min</Text>
          </View>
          <View>
            <Text style={style.timeText}>17</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>sec</Text>
          </View>
          <View>
            <Text style={style.timeText}>23</Text>
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
