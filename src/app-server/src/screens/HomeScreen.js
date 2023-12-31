import { StyleSheet, Text, Button, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='Go to Second Screen' onPress={() => navigation.navigate('Second')} />
    </View>
  );
}

// 画面のスタイルをCSSのように定義できる
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
