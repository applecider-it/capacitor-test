# 設計

## 構成

```
node/       ダミーサーバー
src/        通常のcapacitor
webview/    WebViewを使ったcapacitor
```

## 実装内容

- 擬似的なログインの動線
- カメラ
- ToDo
- ノッチなどの外枠対応
- APIとのバージョンチェック（WebView版のみ有効）

## WebViewを使ったcapacitor

Vueの実体部分は、通常のcapacitorの部分を利用している。

## Nodeのダミーサーバー動作環境

通常のcapacitor、WebViewを使ったcapacitorで共通

- express

## ツール

- vue
- vue router
- tailwind3
