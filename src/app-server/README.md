# フロントエンド

## Getting started

まだDocker Fileの用意ができていないので，とりあえずローカル環境でお願いします．

- Node.js，Expo CLIがローカルにインストールされていることを前提とします

必要なnode modulesをインストールします
```bash
$ cd src/app-server
$ yarn install
```

Expoの開発サーバを立てます
```bash
$ yarn expo
```

- Expoの仕様上`App.js`は`/src/app-server`に配置する必要あり
