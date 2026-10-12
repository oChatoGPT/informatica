// Servidor opcional de prévia. O portal publicado não precisa de Node.js.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = 4173;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8','.md':'text/plain; charset=utf-8'};
const server=http.createServer((req,res)=>{
  let pathname;
  try { pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch { res.writeHead(400); return res.end('Endereço inválido'); }
  let file=path.resolve(root,'.'+pathname);
  if(file!==root && !file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Acesso negado');}
  try { if(fs.statSync(file).isDirectory())file=path.join(file,'index.html'); const data=fs.readFileSync(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data); }
  catch{res.writeHead(404);res.end('Arquivo não encontrado');}
});
server.on('error',error=>{console.error(error.code==='EADDRINUSE'?'A porta 4173 está ocupada. Feche a prévia anterior e tente novamente.':error.message);process.exitCode=1;});
server.listen(port,'127.0.0.1',()=>console.log(`Central Técnica: http://127.0.0.1:${port}/\nEditor: http://127.0.0.1:${port}/admin.html\nMantenha esta janela aberta. Ctrl+C encerra a prévia.`));
