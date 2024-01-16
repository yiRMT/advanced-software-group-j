import Shop from '../interface/Shop';
import mozuList from '../test_data/mozu_food_output.json';
import sugiList from '../test_data/sugi_food_output.json';

export const fetchShopList = async (campus: string) => {
  const campus_id = campus === '中百舌鳥' ? 'mozu' : 'sugi';
  const data = campus_id === 'mozu' ? mozuList : sugiList;
  const imageList = data['photos']
  var shopList: Shop[] = data['infos'].map((shop: any, index: number) => {
    return {
      id: shop.place_id,
      name: shop.name || '',
      imageUrl: imageList[index] !== 'no image' ? imageList[index] : 'https://1.bp.blogspot.com/-I0Mwy1j09XU/VUIJ7AWQxrI/AAAAAAAAtbg/feTqQhXaMOw/s800/omise_shop_tatemono.png',
      location: {
        address: shop.vicinity || '',
        lat: shop.geometry.location.lat || 0.0,
        lng: shop.geometry.location.lng || 0.0
      },
      openingTime: shop.lunch_opening_hour || '',
      closingTime: shop.dinner_closing_hour || '',
      open_now: shop.open_now || false,
      rating: shop.rating || 1.0,
      campus: shop.campus || '',
      payment_methods: shop.payment_methods || []
    }
  });
  shopList.filter((shop: any) => (shop.campus === campus && shop.open_now === true))
  return shopList;
}