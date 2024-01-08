// Shop.ts
// 飲食店のインタフェースを定義

interface Shop {
    id: string;         // 店のid
    name: string;       // 店名
    location: string;   // 住所
    openingTime: string;  // 開店時間
    closingTime: string;  // 閉店時間
    imageUrl: string;   // 画像
}

export default Shop;
