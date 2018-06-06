const app = require('express')();
const HttpsProxyAgent = require('https-proxy-agent');

const env = process.env;
const options = {target: env.PROXY_TARGET, changeOrigin: true};
const proxyServer = env.HTTPS_PROXY || env.https_proxy || env.HTTP_PROXY || env.http_proxy;

if (proxyServer) {
    options.agent = new HttpsProxyAgent(proxyServer);
}

app.use(require('helmet')());
app.use(require('cors')('*'));
app.use(require('apicache').middleware(env.CACHE_DURATION || '1 day'));

app.use('/api', require('http-proxy-middleware')(options));

app.listen(env.APP_PORT || env.PORT || 3000);
