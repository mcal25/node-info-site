import express from 'express';
import http from 'http';
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    // serveFile(req, res, 'index.html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const PORT = 8080;



// const server = http.createServer((req, res) => {
//     let fileName = '';
//     if (req.url === '/' || req.url === '/index') {
//         fileName = 'index.html';
//     } else if (req.url === '/about') {
//         fileName = 'about.html';
//     } else if (req.url === '/contact-me') {
//         fileName = 'contact-me.html'; 
//     } else {
//         fileName = '404.html';
//     }

//     const filePath = path.join(__dirname, fileName);

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('500 Internal Server Error');
//             return;
//         }

//         const statusCode = fileName === '404.html' ? 404 : 200;

//         res.writeHead(statusCode, { 'Content-Type': 'text/html'});
//         res.end('500 Internal Server Error');
//         return;
//     });
// });

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });