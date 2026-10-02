/** トースト出力用Hook */
let showToastHook: Function;
/** ローディング画面のオンオフ用Hook */
let setIsLoadingHook: Function;

/** メッセージ管理のセットアップ */
export function setupMessage(showToastArg: Function, setIsLoadingArg: Function) {
    showToastHook = showToastArg;
    setIsLoadingHook = setIsLoadingArg;
}

/** トースト出力 */
export function showToast(message: string, type: string = "notice") {
    // ログイン必須ページから開始した時に、認証できないと、showToastHookが設定される前にここにくる
    if (!showToastHook) return;

    showToastHook(message, type);
}

/** ローディング画面のオンオフ */
export function setIsLoading(isLoading: boolean) {
    setIsLoadingHook(isLoading);
}
