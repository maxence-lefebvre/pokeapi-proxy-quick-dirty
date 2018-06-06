# pokeapi-proxy-quick-dirty
> A quick project to proxy API requests behind a corporate proxy

# Getting Started
Clone this repository :
```sh
git clone https://github.com/maxence-lefebvre/pokeapi-proxy-quick-dirty.git
```

# Configuration
You should specify the proxy configuration by creating a `.env` file at the root of this folder.
If you use kubernetes

```
# The port Node should listen to
PORT=3000
# The proxy target
PROXY_TARGET=https://pokeapi.co/
# Your corporate proxy url (comment this line if it is already set in your environment variables)
HTTPS_PROXY=http://my.corporate.proxy.corp:port
# The cache duration
CACHE_DURATION=1 day
```

# Usage

Once you've configured the app, you can start it using `npm start`
