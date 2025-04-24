console.log('I this file we are undrstarnding about http module and other related things.');
const http = require('http');
const fs = require('fs');
const path = require('path');
// const dotenv = require('dotenv');
// dotenv.config({ path: path.join(__dirname, '.env') });
// const port = process.env.port || 3000; // default port is 3000 if not found in .env file

const port= process.env.PORT || 5500; // default port is 3000 if not found in .env file
console.log(port);


//  const server = http.createServer((req, res) =>{
    // res.write("<h1>Ab ham Server start krne ja rhe hai. </h1>");
    // res.write("server start kr diya hai. ");   
    
    // console.log(req.url, req.method, req.headers);
    // console.log(req.hostname);   // give the hostname of the request like localhost,
    // res.write(req.url);    // give the url of the request like /, /about, /contact etc.
    // res.write(req.method); // give the method of the request like GET, POST, PUT, DELETE etc.
    // res.write(req.headers); // give the headers of the request like accept, accept-encoding, user-agent etc.
    // res.write(req.headers['accept']); // give the accept header of the request like text/html, application/json etc.
    // res.write(req.headers['accept-encoding']); // give the accept-encoding header of the request like gzip, deflate, br etc.
    // res.write(req.headers['user-agent']); // give the user-agent header of the request like Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 etc.
    // res.write(req.headers['accept-language']); // give the accept-language header of the request like en-US,en;q=0.9,en-GB;q=0.8 etc.
    // res.write(req.headers.host); // give the host header of the request like localhost:3000, localhost:3300 etc.
    
    // console.log(req.path);   // give the path of the request like /, /about, /contact etc.
    // console.log(req.query);   // give the query string of the request like ?keyword=doctor&location=ranchi 
    // console.log(req.params);  // give the params of the request like :id, :name 
    // console.log(req.body);  // give the body of the request like { name: 'John', age: 30 }
    // console.log(req.protocol);  // give the protocol of the request like http, https
    // console.log(req.secure);  // give the secure of the request like true, false
    // console.log(req.ip);    // give the ip of the request.
    // console.log(req.ips);   // give the ips of the request.

//     res.statusCode = 200;  // set the status code of the response like 200, 404, 500 etc.
//     res.setHeader('Content-Type', 'text/plain'); // set the content type of the response like text/html, application/json, text/plain etc.
//     res.end('Hello World\n ab coneection end ho rha hai. ');   // end the response and send the data to the client.
// });

// server.listen(3000, () => {
//         console.log('Server is running on port 3000');
// });




const server2 = http.createServer((req, res) => {
    // res.statusCode = 202;
    // res.setHeader('Content-Type', 'text/plain');

    // res.writeHead(405, {'Content-Type': 'text/html'});
    // res.write("server start kr diya hai. ");

    // res.end('Hello World \n ab connection band ho rha hai');

         if(req.method === 'GET' && req.url === '/'){
            fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            // fs.readFile('./src/index.html', (err, data) => {
                if(err){
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.write("File not found");
                    res.end();
                }else{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.end();
                }
            });
         }
         else if(req.method === 'GET' && req.url === '/about'){
            fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
                if(err){
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.write("File not found");
                    res.end();
                }else{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.end();
                }
            });
         }
         else {
            res.end("File not found");
         }
});


//   server.listen(3300);
  server2.listen(port, () => {
    console.log('Server 2 is running on port 5500');
  });

// something aboput req.query 
//http://localhost:3000/search?keyword=doctor&location=ranchi
// http://localhost:3000/search?keyword=doctor&location=ranchi&age=23&gender=male&city=ranchi&state=jharkhand&country=india

// app.get('/search', (req, res) => {
//     console.log(req.query);
//     // Output: { keyword: 'doctor', location: 'ranchi' }
  
//     const keyword = req.query.keyword; // 'doctor'
//     const location = req.query.location; // 'ranchi'
  
//     res.send(`Searching for ${keyword} in ${location}`);
//   });
  



// 3 way hand shacking
// 1. SYN - client send a SYN packet to server to request a connection.
// 2. SYN-ACK - server send a SYN-ACK packet to client to acknowledge the request and request a connection.
// 3. ACK - client send a ACK packet to server to acknowledge the connection.
// 4. Data transfer - client and server can now send data to each other.
// 5. FIN - client or server can send a FIN packet to close the connection.
// 6. FIN-ACK - client or server send a FIN-ACK packet to acknowledge the request to close the connection.
// 7. Connection closed - client and server can now close the connection.