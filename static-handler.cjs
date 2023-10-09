#!/usr/bin/env node

/**
 * ISC License
 *
 * Copyright (c) 2021, Andrea Giammarchi, @WebReflection
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

const {statSync} = require('fs');
const {resolve} = require('path');

const {env, argv} = process;
const args = argv.slice(2);

let CORS, COOP, COEP, CORP;
let PATH = '/';
let {PORT = 8080} = env;
let VERBOSE = false;
let dir = process.cwd();

for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('-')) {
    switch (args[i]) {
      case '-h':
      case '--help':
        help(0);
        break;
      case '-v':
      case '--verbose':
        VERBOSE = true;
        break;
      case '--path':
        if ((i + 1) < args.length) {
          i++;
          PATH = `/${args[i]}/`.replace(/^\/{2,}/, '/');
          break;
        }
        break;
      case '--coi':
        args.push('--cors', '--coep', '--coop', '--corp');
        break;
      case '--cors':
        CORS = {'Access-Control-Allow-Origin': '*'};
        break;
      case '--coop':
        COOP = {'Cross-Origin-Opener-Policy': 'same-origin'};
        break;
      case '--coep':
        COEP = {'Cross-Origin-Embedder-Policy': CORP ? 'require-corp' : 'credentialless'};
        break;
      case '--corp':
        CORP = {'Cross-Origin-Resource-Policy': 'cross-origin'};
        if (COEP) COEP['Cross-Origin-Embedder-Policy'] = 'require-corp';
        break;
      case '':
        break;
      case '-p':
      case '--port':
        if ((i + 1) < args.length && /^\d+$/.test(args[i + 1])) {
          i++;
          PORT = parseInt(args[i], 10);
          break;
        }
      default:
        help(1, 'Unknow option', args[i]);
    }
  }
  else {
    const stats = statSync(args[i], {throwIfNoEntry: false});
    if (stats && stats.isDirectory())
      dir = resolve(dir, args[i]);
    else
      help(1, 'Invalid folder', args[i]);
  }
}

const handler = require('./cjs/index.js')(
  dir,
  Object.assign({}, CORS, COOP, COEP, CORP)
);

const server = require('http').createServer((req, res) => {
  if (handler(req, res)) {
    if (VERBOSE)
      console.log(' \x1b[2m200\x1b[0m', req.url.replace(/\/$/, '/index.html'));
    return;
  }

  if (VERBOSE)
    console.log(' \x1b[31m404\x1b[0m', req.url);
  res.writeHead(404);
  res.end();
});

server.listen(PORT, () => {
  if (VERBOSE) {
    const extras = ['--verbose'];
    if (CORS) extras.push('--cors');
    if (COOP) extras.push('--coop');
    if (COEP) extras.push('--coep');
    if (CORP) extras.push('--corp');
    console.log(`\n\x1b[7m\x1b[1m static-handler \x1b[0m \x1b[2m${extras.join(' ')}\x1b[0m`);
  }
  console.log(`\x1b[1mhttp://localhost:${PORT}${PATH}\x1b[0m \x1b[2m@ ${dir}\x1b[0m`);
});

function help(code, ...rest) {
  const {length: ERROR} = rest;
  console.log(`
\x1b[7m\x1b[1m  static-handler  \x1b[0m  \x1b[2mby Andrea Giammarchi\x1b[0m
  ${ERROR ? `\n\x1b[31m\x1b[7m\x1b[1m  ${rest[0].padEnd(15, ' ')} \x1b[0m \x1b[1m${rest[1]}\x1b[0m\n` : ''}
  A very simple static files handler,
  used in this script to serve any file.

  \x1b[1moptions\x1b[0m

    --port | -p XXXX  \x1b[2moptional port to use\x1b[0m
    --verbose | -v    \x1b[2mlogs requirested files\x1b[0m
    --help | -h       \x1b[2mthis message${ERROR ? ' without errors' : ''}\x1b[0m
    --path /dir       \x1b[2muse \x1b[0m/dir/\x1b[2m as base path\x1b[0m
    --cors            \x1b[2mset \x1b[0mAccess-Control-Allow-Origin\x1b[2m as \x1b[0m*\x1b[2m origins\x1b[0m
    --coop            \x1b[2mset \x1b[0mCross-Origin-Opener-Policy\x1b[2m as \x1b[0msame-origin\x1b[2m\x1b[0m
    --coep            \x1b[2mset \x1b[0mCross-Origin-Embedder-Policy\x1b[2m as \x1b[0mrequire-corp\x1b[2m,
                      with CORP enabled, or \x1b[0mcredentialless\x1b[2m otherwise\x1b[0m
    --corp            \x1b[2mset \x1b[0mCross-Origin-Resource-Policy\x1b[2m as \x1b[0mcross-origin\x1b[2m,
                      forcing COEP as \x1b[0mrequire-corp\x1b[2m\x1b[0m
    --coi             \x1b[2menables --cors --coep --coop --corp\x1b[2m\x1b[0m
`);
  process.exit(code);
}
