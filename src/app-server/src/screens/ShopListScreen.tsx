// ShopListScreen.tsx
// キャンパス名に合わせて現在開いているお店の一覧を表示するScreen

import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Shop from '../interface/Shop';

// ShopListScreenへ与える引数を定義
interface ShopListScreenProps {
  route: {
    params: {
      campus: string; // キャンパス名
    };
  };
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
  {
    id: '3',
    name: 'Shop 3',
    location: 'Location 3',
    openingTime: '10:00',
    closingTime: '18:00',
    imageUrl: 'https://1.bp.blogspot.com/-I0Mwy1j09XU/VUIJ7AWQxrI/AAAAAAAAtbg/feTqQhXaMOw/s800/omise_shop_tatemono.png'
    // campus: '杉本' 
  },
  {
    id: '4',
    name: 'Shop 4',
    location: 'Location 4',
    openingTime: '10:00',
    closingTime: '18:00',
    imageUrl: 'https://1.bp.blogspot.com/-I0Mwy1j09XU/VUIJ7AWQxrI/AAAAAAAAtbg/feTqQhXaMOw/s800/omise_shop_tatemono.png'
    // campus: '杉本' 
  },
];

// ShopListScreenの表示
const ShopListScreen: React.FC<ShopListScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const renderShopItem = ({ item }: { item: Shop }) => (
    <TouchableOpacity
      style={styles.shopItem}
      onPress={() => navigation.navigate('お店の詳細', { shop: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.shopImage} />
      <Text style={styles.shopName}>{item.name}</Text>
      <Text style={styles.shopLocation}>{item.location}</Text>
      <Text style={styles.businessHours}>
        {`営業時間: ${item.openingTime} - ${item.closingTime}`}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
        {route.params.campus}キャンパス周辺で、いま開いているお店一覧
      </Text>
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
