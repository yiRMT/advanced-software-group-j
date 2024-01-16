// Shop.ts
// 飲食店のインタフェースを定義

interface Shop {
    id: string;         // 店のid
    name: string;       // 店名
    imageUrl: string;   // 画像
    location: {
        address: string;    // 住所
        lat: number;        // 緯度
        lng: number;        // 経度
    }
    openingTime: string;  // 開店時間
    closingTime: string;  // 閉店時間
    open_now: boolean;    // 現在営業中かどうか
    rating: number;     // 評価
    campus: string;     // キャンパス
    payment_methods: string[];  // 支払い方法
}

export default Shop;
