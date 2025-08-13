import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { subscribe, unsubscribe, pushAll } from "./webpushutil.js";

serveAPI("/api/", async (param, req, path, conninfo) => {
  if (path == "/api/subscribe") {
    return subscribe(param);
  }
  if (path == "/api/unsubscribe") {
    return unsubscribe(param);
  }
  if (path == "/api/push") {
    const uuid = param.uuid;
    const data = param.data;
    return pushAll(uuid, data);
  }
  return { res: "err" };
});
