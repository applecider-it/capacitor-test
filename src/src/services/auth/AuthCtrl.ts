import { ref, Ref } from "vue";

import { jsonRequestHeaders, apiUrl } from "@/services/api/http";

import axios from "axios";

import { Preferences } from "@capacitor/preferences";

/**
 * 認証管理
 */
export default class AuthCtrl {
  private currentToken!: Ref<any>;

  /** 認証のセットアップ */
  async setupAuth() {
    const { value } = await Preferences.get({ key: "token" });

    console.log("token", value);

    this.currentToken = ref(value);
  }

  /** ログインしているかを返す */
  checkAuth() {
    return this.currentToken && this.currentToken.value !== null;
  }

  /** ログイン */
  async login(email: string, password: string) {
    const headers = jsonRequestHeaders();

    const data: any = { email, password };
    console.log(data);

    const url = apiUrl("/login");

    let response = null;

    try {
      response = await axios.post(url, data, {
        headers: headers,
      });

      const token = response.data.token;

      this.currentToken.value = token;
      await Preferences.set({ key: "token", value: token });

      console.log(this.currentToken.value);
    } catch (error: any) {
      console.log("error", error);
      response = error.response;
      console.log("response", response);
      if (!response) return 500;
    }

    console.log("response.data", response!.data);

    return response.status;
  }

  /** ログアウト */
  async logout() {
    this.currentToken.value = null;

    await Preferences.remove({ key: "token" });
  }
}
