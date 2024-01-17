// 詳細は https://reactnavigation.org/docs/getting-started

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import BusScreen from '../screens/BusScreen';
import ShopSearchScreen from '../screens/ShopSearchScreen';
import ShopListScreen from '../screens/ShopListScreen';
import ShopDetailScreen from '../screens/ShopDetailScreen';

// 画面遷移はスタックで管理する
const Stack = createNativeStackNavigator();
// お店検索とバスの画面はBottomTabで管理する
const Tab = createBottomTabNavigator();

const ShopStackNavigator = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right"
      }}
    >
      <Stack.Screen
        name="ShopSearchScreen"
        component={ShopSearchScreen} 
        options={{
          headerShown: false,
          headerTitle: 'お店検索',
        }}
      />
      <Stack.Screen
        name="ShopDetailScreen"
        component={ShopDetailScreen}
        options={{
          headerShown: true,
          headerTitle: 'お店の詳細',
          headerBackTitle: '戻る',
        }}
      />
    </Stack.Navigator>
  );
};

// BottomTabに表示するタブを管理
const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="ShopTab"
        component={ShopStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon name="store-search" color={color} size={size} />
          ),
          tabBarLabel: 'お店検索'
        }}
      />
      <Tab.Screen
        name="BusTab"
        component={BusScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon name="bus-clock" color={color} size={size} />
          ),
          tabBarLabel: 'シャトルバス'
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
