# フロントエンド

## Getting started

本プロジェクトのルートディレクトリでDockerコンテナを起動してください
```bash
$ make run-build
```
コンテナに入ってください
```bash
$ docker exec -it コンテナID /bin/sh
```
コンテナ内でExpoの開発サーバを立てます。本番環境ではこれをDockerファイルに含めます。
```bash
$ yarn expo
```
これでlocalhostの8081番ポートを使ってデバッグが可能です。
デバッグはPC上のエミュレータかExpo Goアプリを用いてください。
Expo Goのインストールは[こちら](https://expo.dev/client)。

- Expoの仕様上`App.js`は`/src/app-server`に配置する必要あり
