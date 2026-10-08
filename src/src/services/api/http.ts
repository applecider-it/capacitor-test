import { Capacitor } from '@capacitor/core';

import axios from "axios";

/**
 * APIのhttp関連
 */

/** JSON通信用のヘッダー */
function jsonRequestHeaders() {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return headers;
}

/** API送信用URL */
function apiUrl(uri: string) {
  const host = (Capacitor.getPlatform() === 'android') ?
    '10.0.2.2:3000' : '127.0.0.1:3000'

  const url = `http://${host}${uri}`;

  return url;
}

/** API送信 */
export async function sendApi(uri: string, data: any) {
    const headers = jsonRequestHeaders();

    console.log({uri, data});

    const url = apiUrl(uri);

    try {
      const response = await axios.post(url, data, {
        headers: headers,
      });

      console.log('response', response);
      console.log('response.data', response.data);

      return response.data;
    } catch (error: any) {
      // Axiosのエラー詳細を出力
      console.log("error message:", error.message);
      console.log("error code:", error.code); // ERR_NETWORK や ECONNREFUSED などが出ます
      console.log("error config url:", error.config?.url);

      throw error;
    }
  }