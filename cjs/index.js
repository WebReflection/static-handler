'use strict';
const {basename} = require('path');
const {createReadStream, statSync} = require('fs');
const contentType = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('mime-type'));

/**
 * Returns a very basic response handler (http / express) that
 * will serve static files right away, only if present.
 * @param {string} baseDir the static root folder of the site
 * @param {object=} headers optional extra headers to inject
 * @returns {(req: import('http').IncomingMessage, res: import('http').ServerResponse) => boolean}
 */
module.exports = (baseDir, headers = {}) =>
  /**
   * A simple handler used to serve a static file. Returns `true`
   * if the file has been served, `false` otherwise.
   * @param {import('http').IncomingMessage} req the client request
   * @param {import('http').ServerResponse} res the server response
   * @returns {boolean}
   */
  function handler({method, url}, res) {
    if (method !== "GET")
      return false;

    const i = url.indexOf('?');
    if (-1 < i)
      url = url.slice(0, i);

    if (url.endsWith('/'))
      url += 'index.html';

    const stats = statSync(baseDir + url, {throwIfNoEntry: false});

    if (!stats)
      return false;

    if (stats.isFile()) {
      try {
        res.writeHead(200, {
          ...headers,
          'content-type': contentType(basename(url))
        });
        createReadStream(baseDir + url).pipe(res);
        return true;
      }
      catch (o_O) {
        return false;
      }
    }

    if (stats.isDirectory())
      return handler({method: 'GET', url: url + '/'}, res);

    return false;
  }
;
