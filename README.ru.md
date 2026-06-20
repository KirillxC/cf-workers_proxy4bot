# Cloudflare Telegram Proxy

[🇬🇧 English](README.md) | [🇷🇺 Русский](README.ru.md)

Легковесный WebSocket-прокси для API Telegram на базе Cloudflare Workers.

## О проекте
Этот воркер выступает в роли «прозрачного» туннеля до API Telegram. Он помогает обходить проблемы с подключением и сетевые ограничения, перенаправляя трафик вашего бота через глобальную сеть Cloudflare.

## Развертывание (через панель управления Cloudflare)
Вы можете развернуть этот воркер напрямую через веб-интерфейс Cloudflare:

1. Войдите в свой аккаунт [Cloudflare Dashboard](https://dash.cloudflare.com).
2. В боковом меню слева перейдите в раздел **Compute** (в блоке «Build») и выберите **Workers & Pages**.
3. Нажмите **Create application** -> **Start with Hello World!**.
4. Укажите имя воркера и нажмите **Deploy**.
5. Нажмите **Edit code**, удалите старый код и вставьте содержимое `index.js`.
6. Нажмите **Save and deploy**.

## Использование в вашем Telegram-боте (Aiogram)
Настройте своего бота на использование воркера в качестве сервера API:

```python
from aiogram.client.telegram import TelegramAPIServer
from aiogram import Bot

# URL вашего развернутого воркера
PROXY_URL = "[https://your-worker-url.workers.dev](https://your-worker-url.workers.dev)"

custom_server = TelegramAPIServer.from_base(PROXY_URL)
bot = Bot(token="ВАШ_ТОКЕН", server=custom_server)
```
Так же можете посмотреть, где это [используется на практике](https://github.com/KirillxC/metadata-bot)
