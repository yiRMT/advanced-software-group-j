// screens/SearchScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const NakamozuScreen: React.FC = () => {
  return (
    <View>
      <Text>なかもずキャンパス周辺で、いま開いているお店一覧</Text>
    </View>
  );
};

const SugimotoScreen: React.FC = () => {
  return (
    <View>
      <Text>杉本キャンパス周辺で、いま開いているお店一覧</Text>
    </View>
  );
};

const TopMessage: React.FC = () => {
  const [meal, setMeal] = useState<string>('');

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

  return (
    <View style={{ backgroundColor: 'white', padding: 20 }}>
      <Text style={styles.largeText}>{meal}、どこいく？</Text>
    </View>
  )
};

const SearchScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  smallText: {
    fontSize: 12, // 小さい文字の大きさ
  },
  normalText: {
    fontSize: 16, // 通常の文字の大きさ
  },
  largeText: {
    fontSize: 24, // 大きい文字の大きさ
  },
});

export default SearchScreen;
