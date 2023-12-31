// 詳細は https://reactnavigation.org/docs/getting-started

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';

// 画面遷移はスタックで管理する
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    // スタックに入れる画面の候補を指定する
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Second' component={SecondScreen} />
    </Stack.Navigator>
  );
}