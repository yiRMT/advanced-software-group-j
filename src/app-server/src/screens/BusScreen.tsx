// screens/BusScreen.tsx
// シャトルバスの時刻表を表示するScreen
import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, SafeAreaView, Text, StyleSheet, TouchableOpacity, TextStyle, StyleProp } from 'react-native';
import Bus from '../interface/Bus';
import busData from '../test_data/bus_output.json';
import { fetchBusData } from '../libs/fetchBusData';

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
    (async () => {
      try {
        const data = await fetchBusData();
        const nextDepartureTime = data
          .map(bus => {
            const [hour, minute] = bus.start_time.split(':').map(Number);
            return hour * 60 + minute;
          })
          .filter(departureTime => 
                  departureTime - (currentTime.getHours() * 60 + currentTime.getMinutes()) < 90
                  && departureTime - (currentTime.getHours() * 60 + currentTime.getMinutes()) >= 0)
          .sort((a, b) => a - b)[0];
        setNextDeparture(nextDepartureTime || -1);
      } catch (error) {
        console.error('Error fetching shop data: ', error);
      }
    })();
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

  const BusItem = ({ item }: { item: Bus }) => {
    const timeStyle = setTimeStyle({ bus: item });

    return (
      <View style={styles.busItem}>
        <Text style={styles.busNum}>{item.bus_num} </Text>
        <Text style={timeStyle}>{item.start_time}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.topMessageContainer}>
        <Text style={styles.topMessageText}>中百舌鳥 ⇔ 杉本 シャトルバス</Text>
      </View>
      <FlatList
        data={busData}
        keyExtractor={(item) => item.bus_num}
        renderItem={BusItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  busItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 20
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
  topMessageText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  topMessageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  safearea: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default BusScreen;
