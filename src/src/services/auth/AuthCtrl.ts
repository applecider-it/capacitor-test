import { ref, Ref } from "vue";

import { sendApi } from "@/services/api/http";

import { Preferences } from "@capacitor/preferences";

/**
 * 認証管理
 */
export default class AuthCtrl {
  private currentToken!: Ref<any>;

  /** 認証のセットアップ */
  async setupAuth() {
    console.log("setupAuth");

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
    const data: any = { email, password };
    console.log(data);

    const ret = await sendApi("/login", data);

    if (ret.status === 200) {
      const token = ret.data.token;

      console.log("token", token);

      this.currentToken.value = token;
      await Preferences.set({ key: "token", value: token });

      console.log("currentToken", this.currentToken.value);
    }

    return ret.status;
  }

  /** ログアウト */
  async logout() {
    this.currentToken.value = null;

    await Preferences.remove({ key: "token" });
  }
}
