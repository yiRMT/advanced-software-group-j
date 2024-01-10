# バックエンド進捗

## 現状報告 (2024/1/10 20:48時点)
develop/frontendからfetch⇒mergeしてきてAPIを作成した.

## 各API
[スプレッドシート](https://docs.google.com/spreadsheets/d/1-O0RRZyd_xCGoj1cwoHYrigngggZx1g_Yzw0zMPwBDs/edit#gid=0)に仮データを記載している.
### bus
 出力するjsonは[ここ](https://github.com/Nisk1G/FastAPITest/blob/master/output_data/bus_output.json)

### food
出力するjsonは[中百舌鳥ver](https://github.com/Nisk1G/FastAPITest/blob/master/output_data/mozu_food_output.json), [杉本ver](https://github.com/Nisk1G/FastAPITest/blob/master/output_data/sugi_food_output.json)

## 課題点
- frontと合わせた動作確認ができていない  
リモートデスクトップで開発してるのでQRコード読み込んでも動かない  
懸念点としてpythonのパッケージのインストールが出来てない説がありそう、  
[動作確認してたレポジトリのrequiments.txt](https://github.com/Nisk1G/FastAPITest/blob/master/requirements.txt)をうまく環境構築のプロセスの中に入れればいいがよくわからない状態
