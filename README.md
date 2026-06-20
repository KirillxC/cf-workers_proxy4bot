# Cloudflare Telegram Proxy

[🇬🇧 English](README.md) | [🇷🇺 Русский](README.ru.md)

Lightweight WebSocket-based proxy for Telegram API using Cloudflare Workers.

## About
This worker acts as a transparent tunnel to the Telegram API. It helps to bypass connectivity issues and restrictions by routing your bot's traffic through Cloudflare's global edge network.



## Deployment (Cloudflare Dashboard)
You can deploy this worker directly through the Cloudflare web interface:

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com).
2. On the left sidebar, click **Compute** (under the "Build" section) and select **Workers & Pages**.
3. Click **Create application** -> **Start with Hello World!**.
4. Name your worker and click **Deploy**.
5. Click **Edit code** and paste the content of `index.js`.
6. Click **Save and deploy**.

## Usage in your Telegram Bot (Aiogram)
Configure your bot to use the worker as a custom API server:

```python
from aiogram.client.telegram import TelegramAPIServer
from aiogram import Bot

# The URL of your deployed Cloudflare Worker
PROXY_URL = "[https://your-worker-url.workers.dev](https://your-worker-url.workers.dev)"

custom_server = TelegramAPIServer.from_base(PROXY_URL)
bot = Bot(token="YOUR_TOKEN", server=custom_server)
