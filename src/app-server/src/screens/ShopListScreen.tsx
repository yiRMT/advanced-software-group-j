// ShopListScreen.tsx
// キャンパス名に合わせて現在開いているお店の一覧を表示するScreen

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Shop from '../interface/Shop';
import { fetchShopList } from '../libs/fetchShopData';

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
  const [shopData, setShopData] = useState<any>([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchShopList(route.params.campus);
        setShopData(data);
      } catch (error) {
        console.error('Error fetching shop data: ', error);
      }
    })();
  }, []);

  const ShopItem = ({ item }: { item: Shop }) => (
    <TouchableOpacity
      style={styles.shopItem}
      // @ts-ignore
      onPress={() => navigation.navigate('ShopDetailScreen', { shop: item })}
    >
      <View style={styles.shopItemContainer} >
        <Image style={styles.shopImage} source={{ uri: item.imageUrl }} />
        <View style={styles.shopInfoContainer}>
          <Text style={styles.shopName}>{item.name}</Text>
          <Text style={styles.shopOptionalInfo}>{item.location.address}</Text>
          <Text style={styles.shopOptionalInfo}>
            {`営業時間: ${item.openingTime} - ${item.closingTime} (営業中)`}
          </Text>
        </View>
        <MaterialIcons name="chevron-right" size={30} color="grey" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <FlatList
          data={shopData}
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
  },
  shopItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 8,
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
    borderRadius: 8,
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
  shopOptionalInfo: {
    fontSize: 14,
    color: '#888',
  },
  safearea: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
});

export default ShopListScreen;
