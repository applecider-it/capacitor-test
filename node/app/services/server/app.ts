import express from "express";
import cors from "cors";

import { setRoutes } from "@/config/routes.js";
import { SERVER_VERSION } from "@/config/config";

const app = express();

app.use(
  cors({
    origin: true, // リクエスト元をそのまま許可
    credentials: true,
  }),
);

// JSON形式のリクエストボディを自動でパースする
// これがないと req.body が undefined になる
app.use(express.json());

// 全リクエストに適用
app.use((req, res, next) => {
  // アクセスログ
  console.log(`${req.method} ${req.url}`, req.body, req.headers["user-agent"]);

  // クライアントとバージョンの不一致があったら止める
  if (req.body.version !== SERVER_VERSION) {
    return res.status(406).json({ error: "API Version Error" });
  }

  // リクエストパラメーターから、バージョン管理用の情報を除去
  req.body = req.body.data;

  next(); // 次の処理へ進める
});

setRoutes(app);

export default app;
