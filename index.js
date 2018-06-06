const app = require('express')();
const proxy = require('http-proxy-middleware');
const HttpsProxyAgent = require('https-proxy-agent');

const env = process.env;
const options = {target: env.PROXY_TARGET, changeOrigin: true};
const proxyServer = env.HTTPS_PROXY || env.https_proxy || env.HTTP_PROXY || env.http_proxy;

if (proxyServer) {
    options.agent = new HttpsProxyAgent(proxyServer);
}

app.use('/api', proxy(options));

app.listen(env.APP_PORT || env.PORT);
