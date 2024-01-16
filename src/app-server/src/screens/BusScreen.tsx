// screens/BusScreen.tsx
// シャトルバスの時刻表を表示するScreen
import React, { useEffect, useState, useRef } from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet, TouchableOpacity, TextStyle, StyleProp } from 'react-native';
import Bus from '../interface/Bus';
import busData from '../test_data/bus_output.json';

const BusScreen: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date()); // 現在時刻
  const [nextDeparture, setNextDeparture] = useState<number>(-1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // 発車前の最も近い便を見つけるロジック
    const nextDepartureTime = busData
      .map(bus => {
        const [hour, minute] = bus.start_time.split(':').map(Number);
        return hour * 60 + minute;
      })
      .filter(departureTime => 
              departureTime - (currentTime.getHours() * 60 + currentTime.getMinutes()) < 90
              && departureTime - (currentTime.getHours() * 60 + currentTime.getMinutes()) >= 0)
      .sort((a, b) => a - b)[0];

    setNextDeparture(nextDepartureTime || -1);
  }, [currentTime]);

  // Flat listで表示される各バス時刻のスタイルを定義
  // 現在時刻から最も近い時刻を強調表示する
  const setTimeStyle = ({ bus }: { bus: Bus }): StyleProp<TextStyle> => {
    const departureTime = bus.start_time.split(':').map(Number);
    const busTime = departureTime[0] * 60 + departureTime[1];

    if (nextDeparture > 0 && busTime === nextDeparture) {
      return styles.busTimeHighlight;
    }

    return styles.busTimeNormal;
  };

  const renderBusItem = ({ item }: { item: Bus }) => {
    const timeStyle = setTimeStyle({ bus: item });

    return (
      <SafeAreaView
        style={styles.busItem}>
        <Text>
          <Text style={styles.busNum}>{item.bus_num} </Text>
          <Text style={timeStyle}>{item.start_time}</Text>
        </Text>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeText}>中百舌鳥⇔杉本 シャトルバス出発時刻表</Text>
      <FlatList
        data={busData}
        keyExtractor={(item) => item.bus_num}
        renderItem={renderBusItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  smallText: {
    fontSize: 12,
  },
  normalText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 30,
    marginTop: 20,
  },
  busItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  busNum: {
    fontSize: 26,
    color: '#84919e',
    textAlign: 'right'
  },
  busTimeNormal: {
    fontSize: 40,
    color: '#005aff',
  },
  busTimeHighlight: {
    fontSize: 40,
    color: '#ff4b00',
  },
});

export default BusScreen;
