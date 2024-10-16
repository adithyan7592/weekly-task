const http = require("http");
const url = require("url");
const port = 3000;
const fs = require("fs");


const server = http.createServer(function (req, res) {
    const parsedURL = url.parse(req.url, true);
    console.log(parsedURL);
    res.setHeader("Content-Type", "text/html");
    console.log(parsedURL.pathname);
    
    switch (parsedURL.pathname) {
        
        case "/style.css": {
            // res.write("<h1>Contact Page </h1>");
            res.setHeader("Content-Type", "text/css");
            const data = fs.readFileSync("./page/style.css", { encoding: "UTF8" });
            res.write(data);
        }
            break;
                   
        case "/style1.css": {
            // res.write("<h1>Contact Page </h1>");
            res.setHeader("Content-Type", "text/css");
            const data = fs.readFileSync("./page/style1.css", { encoding: "UTF8" });
            res.write(data);
        }
            break;
            case "/style2.css": {
                // res.write("<h1>Contact Page </h1>");
                res.setHeader("Content-Type", "text/css");
                const data = fs.readFileSync("./page/style2.css", { encoding: "UTF8" });
                res.write(data);
            }
                break;

        case "/login-page": {
            // res.write("<h1>Contact Page </h1>");
            const data = fs.readFileSync("./page/index.html", { encoding: "UTF8" });
            res.write(data);
        }
            break;

        case "/registration-page": {
            // res.write("<h1>Dashboard Page </h1>");
            const data = fs.readFileSync("./page/register.html", { encoding: "UTF8" })
            res.write(data);
        }
            break;
            case "/Signin-page": {
                // res.write("<h1>Dashboard Page </h1>");
                const data = fs.readFileSync("./page/signin.html", { encoding: "UTF8" })
                res.write(data);
            }
                break;

        default: {
            res.write("<h1>Page not found</h1>");
        }

    }
    res.end();

});



server.listen(port, error => {
    if (error) {
        return console.log(error);
    }
    console.log(`Server started on port ${port}`);

})