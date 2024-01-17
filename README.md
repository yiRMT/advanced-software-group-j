# 先端ソフトウェア環境構築実践 - グループJ

## Getting started

### 環境構築

以下のコマンドでDockerコンテナを起動する
```bash
make prd
```
再ビルドする場合は以下
```bash
make prd-build
```

コンテナが起動すると、以下のような構成でWebサーバが構築される。
- `http://LOCAL_IP_ADDR:8081` ... Expo + React Native (フロントエンド) 用
- `http://LOCAL_IP_ADDR:8081/api` ... API (バックエンド) 用
ここで、`LOCAL_IP_ADDR`はDockerコンテナを起動しているPCのプライベートIPアドレスを指す。
`LOCAL_IP_ADDR`はコンテナ起動時に自動で作成される`.env`ファイルで確認可能。

### Expoクライアント

Expoクライアントアプリ (Expo Go) をスマートフォンにインストールしていない場合は以下のリンクからインストールする。
https://expo.dev/client

Expoクライアントアプリから`http://LOCAL_IP_ADDR:8081`にアクセスするとアプリが起動する。
通常はターミナルに表示されるQRコードを読み込めば良いが、今回はそれではうまくいかないので、URLを直書きする。
その際、`LOCAL_IP_ADDR`は`.env`ファイルを参照し、実際のIPアドレスに置き換える。

(注意) クライアントとDockerコンテナを起動しているPCは同一ネットワークに存在する必要がある。

## 開発時

以下のコマンドでDockerコンテナを起動する
```bash
make run
```
再ビルドする場合は以下
```bash
make run-build
```