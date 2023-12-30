# つーちチャット

通知で会話するチャットアプリ featuring [WebPush](https://github.com/code4fukui/WebPush)

## setup

- setup [Deno](https://deno.land/)

```sh
deno run -A https://code4fukui.github.io/WebPush/init.js yourmailaddress@yourdomain
```
- → data/vapidKeys.json
- → static/vapidPublicKey.txt

```sh
deno run -A server.js 
```

## dependencies

- [Deno](https://deno.land)
- [WebPush](https://github.com/code4fukui/WebPush)

## blog

- https://fukuno.jig.jp/4172
