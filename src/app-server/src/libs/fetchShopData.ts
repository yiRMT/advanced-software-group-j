import mozuList from '../test_data/mozu_food_output.json';
import sugiList from '../test_data/sugi_food_output.json';

export const fetchShopList = async (campus: string) => {
  const campus_id = campus === '中百舌鳥' ? 'mozu' : 'sugi';
  const data = campus_id === 'mozu' ? mozuList : sugiList;
  const imageList = data['photos']
  var shopList = data['infos'].map((shop: any, index: number) => {
    return {
      id: shop.place_id,
      name: shop.name || '',
      location: shop.vicinity || '',
      openingTime: shop.lunch_opening_hour || '',
      closingTime: shop.dinner_closing_hour  || '',
      imageUrl: imageList[index] || 'https://1.bp.blogspot.com/-I0Mwy1j09XU/VUIJ7AWQxrI/AAAAAAAAtbg/feTqQhXaMOw/s800/omise_shop_tatemono.png',
      campus: shop.campus || '',
    }
  });
  shopList.filter((shop: any) => (shop.campus === campus || shop.campus === ''))
  return shopList;
}