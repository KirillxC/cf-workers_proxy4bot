export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    const targetUrl = `https://api.telegram.org${url.pathname}${url.search}`;

    const newHeaders = new Headers(request.headers);
    newHeaders.set('Host', 'api.telegram.org');

    // Настройки для запроса
    const fetchOptions = {
      method: request.method,
      headers: newHeaders,
      redirect: 'follow'
    };

    if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
      fetchOptions.body = await request.arrayBuffer();
    }

    try {
      const response = await fetch(targetUrl, fetchOptions);
      
      return response;
    } catch (err) {
      return new Response(`Proxy Error: ${err.message}`, { 
        status: 500,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  },
};
