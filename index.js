const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
    // Determine which file to look for based on the request URL
    let filename = '';
    console.log(`visitor viewed ${req.url}`);
    console.log(req);
    if (req.url === '/' || req.url === '/index.html') {
        filename = 'index.html';
    } else if (req.url === '/about.html') {
        filename = 'about.html';
    } else if (req.url === '/contact-me.html') {
        filename = 'contact-me.html';
    } else {
        filename = '404.html';
    }

    // Resolve the absolute file path
    const filePath = path.join(__dirname, filename);

    // Read the file and serve it
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Internal server error fallback if something is missing
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
            return;
        }

        // Set the appropriate status code (404 for the error page, 200 for successful routes)
        const statusCode = filename === '404.html' ? 404 : 200;
        
        res.writeHead(statusCode, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
    });
});

server.listen(PORT, () => {
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