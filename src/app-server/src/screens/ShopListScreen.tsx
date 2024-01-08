// ShopListScreen.tsx
// キャンパス名に合わせて現在開いているお店の一覧を表示するScreen

import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Shop from '../interface/Shop';
import shopData from '../test_data/shopData.json' // ダミーの店データ

// ShopListScreenへ与える引数を定義
interface ShopListScreenProps {
  route: {
    params: {
      campus: string; // キャンパス名
    };
  };
}

// ShopListScreenの表示
const ShopListScreen: React.FC<ShopListScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  // 以下，APIを叩いてJSON形式のshopDataを取得するコード
  // const [shopData, setJsonData] = useState<any | null>(null); 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('URL'); // JSONファイルのパスを指定（URL）
  //       const data = await response.json();
  //       setJsonData(data);
  //     } catch (error) {
  //       console.error('Error fetching JSON data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
        data={shopData.infos}
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
