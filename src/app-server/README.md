# フロントエンド

## Getting started

本プロジェクトのルートディレクトリでDockerコンテナを起動してください
```bash
$ make run-build
```
コンテナに入ってください
```bash
$ docker exec -it app-server /bin/sh
```
本来ならDockerコンテナ作成時に `node_modules` が作成されるはずですが、作成されないので手動でインストールします。
```bash
$ yarn install
```
コンテナ内でExpoの開発サーバを立てます。本番環境ではこれをDockerファイルに含めます。
```bash
$ yarn start
```
これでPCのプライベートIPアドレスの8081番ポートを使ってホットリロードを使ったデバッグが可能です。
`yarn start` 実行後にターミナルに表示されるQRコードをiPhoneまたはAndroid端末で開いてください。

## 使用ライブラリ

- [React Native](https://reactnative.dev)
- [Expo](https://expo.dev)