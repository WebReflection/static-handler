import {extname} from 'path';
import {createReadStream, statSync} from 'fs';
import mime from './mime.js';

const MIN_BUFFER = 1024 * 1024;
const {min} = Math;
const rangeExp = /^bytes=(\d+)-(\d*)/;

/**
 * Returns a very basic response handler (http / express) that
 * will serve static files right away, only if present.
 * @param {string} baseDir the static root folder of the site
 * @param {object=} headers optional extra headers to inject
 * @returns {(req: import('http').IncomingMessage, res: import('http').ServerResponse) => boolean}
 */
export default (baseDir, headers = {}) =>
  /**
   * A simple handler used to serve a static file. Returns `true`
   * if the file has been served, `false` otherwise.
   * @param {import('http').IncomingMessage} req the client request
   * @param {import('http').ServerResponse} res the server response
   * @returns {boolean}
   */
  function handler({method, url, headers: {range} = {}}, res) {
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
      const {size} = stats;
      let status = 0;
      try {
        if (rangeExp.test(range || '')) {
          const {$1, $2} = RegExp;
          const start = parseInt($1, 10) || 0;
          if (start >= size)
            throw (status = 416);

          let end = parseInt($2, 10) || 0;
          if (!end || end >= size)
            end = min(size, start + MIN_BUFFER) - 1;

          res.writeHead(status = 206, {
            ...headers,
            'Accept-Range': 'bytes',
            'Content-Range': `bytes ${start}-${end}/${size}`,
            'Content-Length': (end + 1) - start,
            'Content-Type': mime[extname(url)]
          });
          createReadStream(baseDir + url, {start, end}).pipe(res);
        }
        else {
          res.writeHead(status = 200, {
            ...headers,
            'Content-Length': size,
            'Content-Type': mime[extname(url)]
          });
          createReadStream(baseDir + url).pipe(res);
        }
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
