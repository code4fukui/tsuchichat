import WebPush from "https://code4fukui.github.io/WebPush/WebPush.js";
import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { UUID } from "https://code4sabae.github.io/js/UUID.js";

await Deno.mkdir("data/subscription", { recursive: true });

const list = (await dir2array("data/subscription")).filter(i => i.endsWith(".json")).map(i => i.substring(0, i.length - 5));

export const subscribe = async (param) => {
  const subscription = param;
  const uuid = UUID.generate();
  await Deno.writeTextFile("data/subscription/" + uuid + ".json", JSON.stringify(subscription));
  console.log("subscribe", uuid);
  list.push(uuid);
  return { uuid };
};

export const unsubscribe = async (param) => {
  const uuid = param.uuid;
  await Deno.remove("data/subscription/" + uuid + ".json");
  console.log("unsubscribe", uuid);
  const n = list.indexOf(uuid);
  if (n >= 0) list.splice(n, 1);
  return { uuid };
};

export const pushAll = async (uuid, data) => {
  for (const l of list) {
    if (l == uuid) continue;
    WebPush.push(l, data);
  }
  return { res: "ok" };
};
