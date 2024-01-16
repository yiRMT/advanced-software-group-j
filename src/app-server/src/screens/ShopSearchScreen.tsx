// screens/SearchScreen.tsx
// 各キャンパスで今開いているお店を一覧表示するScreen
// ShopListScreenへキャンパス名を引数で与えてTopTabのスクリーンとして表示

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ShopListScreen from './ShopListScreen';

// 各キャンパスの画面はTopTabで管理
const Tab = createMaterialTopTabNavigator();

// "お店検索"画面の上部に表示するトップメッセージ
// 時間帯に合わせてメッセージを変える
// 「朝ごはん or ランチ or 夜ごはん、どこいく？」
const TopMessage: React.FC = () => {
  const [meal, setMeal] = useState<string>('');

  // 食事の種類を時間帯に合わせて変更（react.useEffect の利用）
  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 3 && currentHour < 11) {
      setMeal('朝ごはん');
    } else if (currentHour >= 11 && currentHour < 16) {
      setMeal('ランチ');
    } else {
      setMeal('夜ごはん');
    }
  }, []);

  // 時間帯に合わせたトップメッセージを表示
  return (
    <View style={styles.topMessageContainer}>
      <Text style={styles.topMessageText}>{meal}、どこいく？</Text>
    </View>
  )
};

// 中百舌鳥キャンパスのTopTab
const NakamozuScreen: React.FC = () => {
  return (
    <ShopListScreen
      route={{ params: { campus: '中百舌鳥' } }}
    />
  );
};

// 杉本キャンパスのTopTab
const SugimotoScreen: React.FC = () => {
  return (
    <ShopListScreen
      route={{ params: { campus: '杉本' } }}
    />
  );
};

// お店検索Screen
const ShopSearchScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <TopMessage />
      <Tab.Navigator
        initialRouteName="Nakamozu"
      >
        <Tab.Screen
          name="Nakamozu"
          component={NakamozuScreen}
          options={{
            tabBarLabel: '中百舌鳥キャンパス',
          }}
        />
        <Tab.Screen
          name="Sugimoto"
          component={SugimotoScreen}
          options={{
            tabBarLabel: '杉本キャンパス',
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

// スタイルシート
const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16
  },
  container: {
    flex: 1,
    height: '100%',
  },
  topMessageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  topMessageText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default ShopSearchScreen;
