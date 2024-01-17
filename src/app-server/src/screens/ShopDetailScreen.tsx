// screens/ShopDetailScreen.tsx
// お店の詳細を表示するScreen

import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Rating } from '@kolking/react-native-rating';
import MapView, { Marker } from 'react-native-maps';
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
    <SafeAreaView style={styles.safearea}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.heroContainer}>
          <View style={styles.heroOverlayContainer}>
            <Text style={styles.title}>{shop.name}</Text>
            <Rating rating={shop.rating} disabled size={24} style={styles.rating} />
          </View>
          <Image style={styles.heroImage} source={{ uri: shop.imageUrl }} contentFit='cover' />
        </View>
        <View style={styles.shopInfoContainer}>
          <Text style={styles.shopInfoHeader}>営業時間</Text>
          {shop.open_now ? (
            <Text style={styles.shopInfoText}>営業中</Text>
          ) : (
            <Text style={styles.shopInfoText}>閉店中</Text>
          )}
          <Text style={styles.shopInfoText}>{`${shop.openingTime} - ${shop.closingTime}`}</Text>
          <Text style={styles.shopInfoHeader}>決済方法</Text>
          {shop.payment.cash && <Text style={styles.shopInfoText}>現金</Text>}
          {shop.payment.card && <Text style={styles.shopInfoText}>クレジットカード</Text>}
          {shop.payment.paypay && <Text style={styles.shopInfoText}>PayPay</Text>}
          <Text style={styles.shopInfoHeader}>アクセス</Text>
          <Text style={styles.shopInfoText}>{shop.location.address}</Text>
          <MapView
            style={{ width: '100%', height: 200 }}
            initialRegion={{
              latitude: shop.location.lat,
              longitude: shop.location.lng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: shop.location.lat,
                longitude: shop.location.lng,
              }}
              title={shop.name}
              description={shop.location.address}
            />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// スタイルシート
const styles = StyleSheet.create({
  shopInfoText: {
    fontSize: 16, // 通常の文字の大きさ
  },
  shopInfoHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  shopInfoContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
  },
  rating: {
    marginTop: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  heroOverlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 50
  },
  heroImage: {
    width: '100%',
    height: '100%'
  },
  heroContainer: {
    width: '100%',
    height: 240,
  },
  scrollViewContainer: {
    width: '100%',
  },
  safearea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ShopDetailScreen;
