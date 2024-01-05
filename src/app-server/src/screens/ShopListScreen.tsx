// ShopListScreen.tsx
// キャンパス名に合わせて現在開いているお店の一覧を表示するScreen

import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

// ShopListScreenへ与える引数を定義
interface ShopListScreenProps {
  route: {
    params: {
      campus: string; // キャンパス名
    };
  };
}

// お店（Shop）のインタフェース
interface Shop {
  id: string;           // 店のID
  name: string;         // 店の名前
  location: string;     // 住所
  openingTime: string;  // 営業開始時刻
  closingTime: string;  // 営業終了時刻
  imageUrl: string;     // 店の画像
  //   campus: string;       // 近いキャンパス
}

// ダミーの店データ
const shopData: Shop[] = [
  {
    id: '1',
    name: 'Shop 1',
    location: 'Location 1',
    openingTime: '14:00',
    closingTime: '23:00',
    imageUrl: 'https://1.bp.blogspot.com/-I0Mwy1j09XU/VUIJ7AWQxrI/AAAAAAAAtbg/feTqQhXaMOw/s800/omise_shop_tatemono.png'
    // campus: '中百舌鳥' 
  },
  {
    id: '2',
    name: 'Shop 2',
    location: 'Location 2',
    openingTime: '10:00',
    closingTime: '18:00',
    imageUrl: 'https://1.bp.blogspot.com/-I0Mwy1j09XU/VUIJ7AWQxrI/AAAAAAAAtbg/feTqQhXaMOw/s800/omise_shop_tatemono.png'
    // campus: '杉本' 
  },
];

// ShopListScreenの表示
const ShopListScreen: React.FC<ShopListScreenProps> = ({ route }) => {
  const renderShopItem = ({ item }: { item: Shop }) => (
    <View style={styles.shopItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.shopImage} />
      <Text style={styles.shopName}>{item.name}</Text>
      <Text style={styles.shopLocation}>{item.location}</Text>
      <Text style={styles.businessHours}>
        {`営業時間: ${item.openingTime} - ${item.closingTime}`}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>{route.params.campus}キャンパス周辺で、いま開いているお店一覧</Text>
      <FlatList
        data={shopData}
        keyExtractor={(item) => item.id}
        renderItem={renderShopItem}
      />
    </View>
  );
};

// スタイルシート
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  shopItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shopLocation: {
    fontSize: 14,
    color: '#888',
  },
  businessHours: {
    fontSize: 14,
    color: '#555',
  },
  shopImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default ShopListScreen;
