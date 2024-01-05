// 詳細は https://reactnavigation.org/docs/getting-started

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import BusScreen from '../screens/BusScreen';
import SearchScreen from '../screens/SearchScreen';

// 画面遷移はスタックで管理する
const Stack = createNativeStackNavigator();
// お店検索とバスの画面はBottomTabで管理する
const Tab = createBottomTabNavigator();

// BottomTabに表示するタブを管理
const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="お店検索"
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        // headerShown: false,  // デフォルトヘッダー表示の有無
      }}
    >
      <Tab.Screen
        name="お店検索"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon name="store-search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="シャトルバス"
        component={BusScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon name="bus-clock" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
