import { ref, Ref } from 'vue'

import { jsonRequestHeaders, apiUrl } from '@/services/api/http';

import axios from 'axios';

import { Preferences } from '@capacitor/preferences';

let currentToken: Ref<any>;

/** 認証のセットアップ */
async function setupAuth() {
    const { value } = await Preferences.get({ key: 'token' });

    console.log('token', value);

    currentToken = ref(value);
}

/** ログインしているかを返す */
function checkAuth() {
    return currentToken && currentToken.value !== null;
}

/** ログイン */
async function login(email: string, password: string) {
    const headers = jsonRequestHeaders();

    const data: any = { email, password };
    console.log(data);

    const url = apiUrl('/login');

    let response = null;

    try {
        response = await axios.post(url, data, {
            headers: headers,
        });

        const token = response.data.token;

        currentToken.value = token;
        await Preferences.set({ key: 'token', value: token });

        console.log(currentToken.value);
    } catch (error: any) {
        console.log('error', error);
        response = error.response;
        console.log('response', response);
        if (!response) return 500;
    }

    console.log('response.data', response!.data);

    return response.status;
}

/** ログアウト */
async function logout() {
    currentToken.value = null;

    await Preferences.remove({ key: 'token' });
}

export const auth = {
    setupAuth,
    checkAuth,
    login,
    logout,
}