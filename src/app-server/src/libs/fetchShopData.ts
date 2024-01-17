import Shop from '../interface/Shop';
import Constants from "expo-constants";

export const fetchShopList = async (campus: string) => {
  // const hostIp = Constants?.expoConfig?.hostUri ? Constants.expoConfig.hostUri.split(`:`).shift() : '';
  const url = encodeURI(`http://${process.env.EXPO_PUBLIC_IP}:8081/api/food?campus=${campus}`);
  try {
    const response = await fetch(url);
    const data = await response.json();
    var shopList: Shop[] = data.map((shop: any, index: number) => {
      return {
        id: index,
        name: shop.name || '',
        imageUrl: shop.image_path !== 'no image' ? shop.image_path : 'https://1.bp.blogspot.com/-I0Mwy1j09XU/VUIJ7AWQxrI/AAAAAAAAtbg/feTqQhXaMOw/s800/omise_shop_tatemono.png',
        location: {
          address: shop.vicinity || '',
          lat: shop.location_lat || 0.0,
          lng: shop.location_lng || 0.0
        },
        openingTime: shop.lunch_opening_hour || '',
        closingTime: shop.dinner_closing_hour || '',
        open_now: shop.open_now === 'TRUE' ? true : false, // 'TRUE' or 'FALSE
        rating: shop.google_rating || 1.0,
        campus: shop.campus || '',
        payment: {
          cash: shop.cash_available === 'TRUE' ? true : false,
          card: shop.card_available === 'TRUE' ? true : false,
          paypay: shop.paypay_available === 'TRUE' ? true : false
        }
      }
    });
    shopList = shopList.filter((shop: any) => (shop.campus === campus && shop.open_now === true));
    return shopList;
  } catch (error) {
    console.log(error);
  }
  return [];
}