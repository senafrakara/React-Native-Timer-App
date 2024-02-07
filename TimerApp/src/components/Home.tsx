import {View, Text} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 45}}>
        <Text>1</Text>
      </View>
      <View style={{flex: 45}}>
        <Text>2</Text>
      </View>
      <View style={{flex: 10}}>
        <Text>3</Text>
      </View>
    </View>
  );
}
