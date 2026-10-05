import type { CapacitorConfig } from "@capacitor/cli";

// 環境変数などから動作環境の判定
const isProd = process.env.NODE_ENV === "production";

let url = "https://example.com";

if (!isProd) {
  // 開発環境

  url = "http://10.0.2.2"; // Android
  //url = "http://localhost";  // iOS

  //url += ":5173"; // npm run dev
  url += ":5174"; // npm run build
}

console.log({isProd, url})

const config: CapacitorConfig = {
  appId: "com.example.myappwebview",
  appName: "My App WebView",
  webDir: "public",
  android: {
    allowMixedContent: true,
  },
  server: {
    url: url,
    cleartext: true,
    errorPath: "error.html",
    allowNavigation: ["http://127.0.0.1:3000", "http://10.0.2.2:3000"],
  },
};

export default config;
