// 詳細は https://reactnavigation.org/docs/getting-started

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import BusScreen from '../screens/BusScreen';
import SearchScreen from '../screens/SearchScreen';
// import ShopListScreen from '../screens/ShopListScreen';
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
        name="お店探し"
        component={SearchScreen} 
        options={({route}) => ({
          headerShown: route.state && route.state.index > 0 ? true : false,
        })}
      />
      <Stack.Screen
        name="お店の詳細"
        component={ShopDetailScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

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
        component={ShopStackNavigator}
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
