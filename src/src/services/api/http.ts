import { Capacitor } from "@capacitor/core";
import { type Router } from 'vue-router';

import axios from "axios";

import { showToast } from "@/services/ui/message";

import { CLIENT_VERSION } from "@/config/config";

/**
 * APIのhttp関連
 */

/** JSON通信用のヘッダー */
function jsonRequestHeaders() {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  return headers;
}

/** API送信用URL */
function apiUrl(uri: string) {
  const host =
    Capacitor.getPlatform() === "android" ? "10.0.2.2:3000" : "127.0.0.1:3000";

  const url = `http://${host}${uri}`;

  return url;
}

/** API送信 */
export async function sendApi(uri: string, data: any, router: Router) {
  const headers = jsonRequestHeaders();

  console.log({ uri, data });

  const url = apiUrl(uri);

  const result: {
    status: number;
    data: any;
  } = {
    status: 0,
    data: {},
  };

  let needUpdate = false;

  try {
    const response = await axios.post(url, data, {
      headers: headers,
    });

    console.log("response", response);
    console.log("response.data", response.data);

    if (response.data.version !== CLIENT_VERSION) {
      needUpdate = true;
    } else {
      result.status = 200;
      result.data = response.data.data;
    }
  } catch (error: any) {
    // Axiosのエラー詳細を出力
    console.log("error message:", error.message);
    console.log("error code:", error.code); // ERR_NETWORK や ECONNREFUSED などが出ます
    console.log("error config url:", error.config?.url);

    const response = error.response;
    console.log("response", response);

    result.status = response ? response.status : 500;

    // ログインエラー以外は、通信エラー
    if (result.status !== 401) {
      showToast("通信エラー");
    }
  }

  if (needUpdate) {
    showToast("アプリの更新のため、アプリの再起動が必要です。");
    await router.replace({ path: '/stop', query: { type: 'needUpdate' } });
    throw new Error("バージョン不一致");
  }

  return result;
}
