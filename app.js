const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write('Welcome to Home Page!');
//         res.end();
//     } else if(req.url === '/about'){
//         res.write('This is About Page!');
//         res.end();
//     }
//     else{
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         res.write(`
//             <h1>Oops! Seems something went wrong!</h1>
//             <p>The page couldn't be found!</p>
//             <a href='/'>Go to Home</a>
//         `);
//         res.end();
//     }
// });

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('This is home page!')
        res.end();
    }
    else if(req.url === '/about'){
        res.write('You are on about page')
        res.end();
    }
    else{ 
        res.write(
        `<h1>Oops! it went wrong!</h1>
        <p>The resource could not be found</p>
        <a href='/'>You may visit the home page.</a>`
    )
    res.end();

    }
});

server.listen(5000, () => {
    console.log('Server running on port 5000');
});
