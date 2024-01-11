// ShopListScreen.tsx
// キャンパス名に合わせて現在開いているお店の一覧を表示するScreen

import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
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

  const ShopItem = ({ item }: { item: Shop }) => (
    <TouchableOpacity
      style={styles.shopItem}
      onPress={() => navigation.navigate('お店の詳細', { shop: item })}
    >
      <View style={styles.shopItemContainer} >
        <Image source={{ uri: item.imageUrl }} style={styles.shopImage} />
        <View style={styles.shopInfoContainer}>
          <Text style={styles.shopName}>{item.name}</Text>
          <Text style={styles.shopLocation}>{item.location}</Text>
          <Text style={styles.businessHours}>
            {`営業時間: ${item.openingTime} - ${item.closingTime}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <FlatList
          data={shopData.infos}
          keyExtractor={(item) => item.id}
          renderItem={ShopItem}
        />
      </View>
    </SafeAreaView>
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
  shopItemContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  shopImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain'
  },
  shopInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
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
  safearea: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
});

export default ShopListScreen;
