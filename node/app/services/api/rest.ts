import { SERVER_VERSION } from "@/config/config";

/** レスポンシブに共通情報を混ぜる */
export function packResponse(data: any) {
  const version = SERVER_VERSION;
  return {
    version,
    data,
  };
}
