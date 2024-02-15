import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utilities/style';

const {height, width} = Dimensions.get('screen');

export default function Lap() {
  const [lapData, setLapData] = useState([
    '01:10:90',
    '02:10:90',
    '02:10:90',
    '02:10:90',
    '02:10:90',
    '02:10:90',
    '02:10:90',
    '02:10:90',
    '02:10:90',
  ]);

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.titleText}>Lap Time</Text>
        <Text style={style.titleText}>Lap No</Text>
      </View>

      <FlatList
        data={lapData}
        renderItem={item => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: width,
                marginVertical: 10,
              }}>
              <Text style={{color: 'white'}}>{item.item}</Text>
              <Text style={{color: 'white'}}>
                {lapData.length - item.index}
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
