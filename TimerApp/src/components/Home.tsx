import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import Clock from './Clock';
import Lap from './Lap';
import ButtonControllers from './ButtonControllers';
import {colors} from '../utilities/style';

export default function Home() {
  const [time, settime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setresults] = useState([]);

  const timer = useRef(null);

  const handleStart = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        settime(previousTime => previousTime + 1);
      }, 10);

      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }

    setIsRunning(previousState => !previousState);
  }, [isRunning]);
  //isRunning değişmediği sürece içerdeki fonksiyonu, sakladığı işlevi döndür çalıştır demek useCallBack
  //isRunning burada deps adıyla geçer.

  const handleLap = useCallback(() => {
    if (isRunning) {
      setresults(previousState => [...previousState, time]);
    }
  }, [isRunning, time]);

  const handlStop = useCallback(() => {
    if (isRunning) {
    }
  }, []);

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
