import fs from 'fs';
import path from 'path';
import http from 'http';
import minimist from 'minimist';
import url from 'url';
const argv = minimist(process.argv.slice(2));
let server;
let dirs;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function listDirs(root) {
  const files = fs.readdirSync(root);
  const dirs = [];

  for (let i = 0, l = files.length; i < l; i++) {
    const file = files[i];
    if (file[0] !== '.') {
      const stat = fs.statSync(path.join(root, file));
      if (stat.isDirectory()) {
        dirs.push(file);
      }
    }
  }

  return dirs;
}

function getIndexTemplate() {
  const links = dirs.map(function (dir) {
    const url = '/' + dir;
    return (
      '<li onclick="document.location=\'' +
      url +
      '\'"><a href="' +
      url +
      '">' +
      url +
      '</a></li>'
    );
  });

  return (
    '<!doctype html>' +
    '<html>' +
    '<head>' +
    '<title>byzhtml examples</title>' +
    '<style>' +
    'body {padding:25px;}' +
    'ul {margin:0; padding:0; list-style:none;}' +
    'li {padding:5px 10px;}' +
    'li:hover {background:#eee; cursor:pointer;}' +
    'a {text-decoration:none; color:#0080ff;}' +
    '</style>' +
    '<body>' +
    '<ul>' +
    links.join('') +
    '</ul>'
  );
}

function sendResponse(res, statusCode, body) {
  res.writeHead(statusCode);
  res.write(body);
  res.end();
}

function send200(res, body) {
  sendResponse(res, 200, body || '<h1>OK</h1>');
}

function send404(res, body) {
  sendResponse(res, 404, body || '<h1>Not Found</h1>');
}

function pipeFileToResponse(res, file, type) {
  if (type) {
    res.writeHead(200, {
      'Content-Type': type,
    });
  }
  fs.createReadStream(path.join(__dirname, file)).pipe(res);
}

dirs = listDirs(__dirname);

server = http.createServer(function (req, res) {
  let url = req.url;

  // Process byzhtml javascript files
  if (/byzhtml\.min\.js$/.test(url)) {
    pipeFileToResponse(res, '../dist/byzhtml.min.js', 'text/javascript');
    return;
  }
  if (/byzhtml\.min\.js\.map$/.test(url)) {
    pipeFileToResponse(res, '../dist/byzhtml.min.js.map', 'text/javascript');
    return;
  }
  if (/Neanes\.otf$/.test(url)) {
    pipeFileToResponse(res, '../dist/Neanes.otf', 'text/javascript');
    return;
  }
  if (/NeanesRTL\.otf$/.test(url)) {
    pipeFileToResponse(res, '../dist/NeanesRTL.otf', 'text/javascript');
    return;
  }
  if (/NeanesStathisSeries\.otf$/.test(url)) {
    pipeFileToResponse(
      res,
      '../dist/NeanesStathisSeries.otf',
      'text/javascript',
    );
    return;
  }
  if (/byzhtml\.default\.css$/.test(url)) {
    pipeFileToResponse(res, './byzhtml.default.css', 'text/javascript');
    return;
  }
  // Process /
  if (url === '/' || url === '/index.html') {
    send200(res, getIndexTemplate());
    return;
  }

  // Format request */ -> */index.html
  if (/\/$/.test(url)) {
    url += 'index.html';
  }

  // Format request /get -> /get/index.html
  const parts = url.split('/');
  if (dirs.indexOf(parts[parts.length - 1]) > -1) {
    url += '/index.html';
  }

  // Process index.html request
  if (/index\.html$/.test(url)) {
    if (fs.existsSync(path.join(__dirname, url))) {
      pipeFileToResponse(res, url, 'text/html; charset=utf-8');
    } else {
      send404(res);
    }
  }

  // Process server request
  else if (new RegExp('(' + dirs.join('|') + ')/server').test(url)) {
    if (fs.existsSync(path.join(__dirname, url + '.js'))) {
      require(path.join(__dirname, url + '.js'))(req, res);
    } else {
      send404(res);
    }
  } else {
    send404(res);
  }
});

const PORT = argv.p || 3000;

server.listen(PORT, () => {
  console.log(`Examples running at http://localhost:${PORT}`);
});
