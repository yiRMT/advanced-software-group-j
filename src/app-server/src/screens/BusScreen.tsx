// screens/BusScreen.tsx
// シャトルバスの時刻表を表示するScreen

import React from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Bus from '../interface/Bus';
import busData from '../test_data/bus_output.json'; // バス時刻表の仮データJSONファイル

const renderBusItem = ({ item }: { item: Bus }) => (
  <TouchableOpacity style={styles.busItem}>
    <Text>
      <Text style={styles.busNum}>{item.bus_num}  </Text>
      <Text style={styles.busTimeNormal}>{item.start_time}</Text>
    </Text>
  </TouchableOpacity>
);

const BusScreen: React.FC = () => {
  // 現在時刻と最も近い発車時刻の便を強調表示したい
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeText}>中百舌鳥⇔杉本 シャトルバス時刻表</Text>
      <FlatList
        data={busData}
        keyExtractor={(item) => item.bus_num}
        renderItem={renderBusItem}
      />
    </SafeAreaView>
  );
};

// スタイルシート
const styles = StyleSheet.create({
  smallText: {
    fontSize: 12, // 小さい文字の大きさ
  },
  normalText: {
    fontSize: 16, // 通常の文字の大きさ
  },
  largeText: {
    fontSize: 20, // 大きい文字の大きさ
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
    color: '#84919e'
  },
  busTimeNormal: {
    fontSize: 28,
    color: '#005aff',
  },
  busTimeHighlight: {
    fontSize: 20,
    color: '#ff4b00'
  },
});

export default BusScreen;
