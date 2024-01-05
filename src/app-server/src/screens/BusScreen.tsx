// screens/BusScreen.tsx
// シャトルバスの時刻表を表示するScreen

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BusScreen: React.FC = () => {
  // 現在時刻と最も近い発車時刻の便を強調表示したい
  return (
    <View>
      <Text style={styles.largeText}>ここにシャトルバスの時刻表を表示</Text>
    </View>
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
});

export default BusScreen;
