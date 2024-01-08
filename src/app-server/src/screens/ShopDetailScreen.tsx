// screens/ShopDetailScreen.tsx
// お店の詳細を表示するScreen

import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Shop from '../interface/Shop';

// ShopListScreenへ与える引数を定義
interface ShopDetailScreenProps {
  route: {
    params: {
      shop: Shop;
    };
  };
}

const ShopDetailScreen: React.FC<ShopDetailScreenProps> = ({ route }) => {
  const { shop } = route.params;
  // APIでidを引数としてお店情報をJSON形式で取得して必要な詳細情報を表示する
  // 仮でShopインタフェースで店情報を取得
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.largeText}>
        id={shop.id} のお店がもつ詳細情報を表示する。
      </Text>
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
});

export default ShopDetailScreen;
