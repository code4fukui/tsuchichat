# つーちチャット

通知で会話するチャットアプリ featuring [WebPush](https://github.com/code4fukui/WebPush)

## setup

- setup [Deno](https://deno.land/)

```sh
mkdir data
cat > data/mailaddress.txt
yourmailaddress@yourdomain
```

```sh
deno run -A https://code4fukui.github.io/WebPush/push.js
```
- → data/vapidKeys.json
- → static/vapidPublicKey.txt

```sh
deno run -A server.js 
```

## blog

- https://fukuno.jig.jp/4171

## dependencies

- [Deno](https://deno.land)
- [web-push for Deno](https://github.com/code4fukui/web-push/) forked from [web-push](https://www.npmjs.com/package/web-push)

## reference

- [ウェブプッシュ プロトコル  |  Articles  |  web.dev](https://web.dev/articles/push-notifications-web-push-protocol?hl=ja)
- [Notification - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/notification)
- [draft-ietf-webpush-encryption-09](https://datatracker.ietf.org/doc/html/draft-ietf-webpush-encryption)
