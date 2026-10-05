import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.myappwebview",
  appName: "My App WebView",
  webDir: "public",
  android: {
    allowMixedContent: true,
  },
  server: {
    url: "http://10.0.2.2:5173",
    cleartext: true,
    allowNavigation: ["http://127.0.0.1:3000", "http://10.0.2.2:3000"],
  },
};

export default config;
