const fs = require('fs');
const http = require('http'); // Use 'http' instead of 'https'

const pdfData = fs.readFileSync('D:\\User\\Documents\\GitHub\\CDCS\\Dandyhacks-2023\\Backend\\bequiet.pdf');
const base64String = pdfData.toString('base64');

const options = {
    hostname: '127.0.0.1',
    port: 5000,
    path: '/convert',
    method: 'POST',
    headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': Buffer.byteLength(base64String)
    }
};

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.write(base64String);
console.log(base64String);
req.end();
