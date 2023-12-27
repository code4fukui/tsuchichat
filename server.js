import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { UUID } from "https://code4sabae.github.io/js/UUID.js";
import WebPush from "https://code4fukui.github.io/WebPush/WebPush.js";
import { dir2array } from "https://js.sabae.cc/dir2array.js";

await Deno.mkdir("data/subscription", { recursive: true });

const list = (await dir2array("data/subscription")).filter(i => i.endsWith(".json")).map(i => i.substring(0, i.length - 5));

serveAPI("/api/", async (param, req, path, conninfo) => {
  if (path == "/api/subscribe") {
    try {
      const subscription = JSON.stringify(param);
      const uuid = UUID.generate();
      await Deno.writeTextFile("data/subscription/" + uuid + ".json", subscription);
      console.log("subscribe", uuid);
      list.push(uuid);
      return { uuid };
    } catch (e) {
      console.log(e);
    }
  }
  if (path == "/api/unsubscribe") {
    try {
      const uuid = param.uuid;
      console.log("unsubscribe", uuid);
      await Deno.remove("data/subscription/" + uuid + ".json");

      const n = list.indexOf(uuid);
      if (n >= 0) list.splice(n, 1);
      return { uuid };
    } catch (e) {
      console.log(e);
    }
  }
  if (path == "/api/push") {
    try {
      const uuid = param.uuid;
      const data = param.data;
      for (const l of list) {
        if (l == uuid) continue;
        WebPush.push(l, data);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return { res: "err" };
});
