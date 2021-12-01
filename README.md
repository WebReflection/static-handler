# static-handler

A very simple static files handler, useful for testing, debugging purpose, or whenever a very basic static file server is needed as fallback/resource.

```sh
# as CLI
npx static-handler --help
```

```js
// as utility
const staticHandler = require('static-handler');

const handled = staticHandler(__dirname);

require('http').createServer((req, res) => {
  // handled as static content, returns true
  if (handled(req, res))
    return;

  // do anything else
}).listen(8080);
```
