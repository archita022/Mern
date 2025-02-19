const http = require("http");
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Good Afternoon</h1>");
    res.write("<br>");
    res.write("<h3>GIM</h3>");
    res.write(`
        <from>
        <label> Name</label>
        <input type="text" placeholder="Enter your name">
        <br>
        <label> Password</label>
        <input type="text" placeholder="Enter your password">
        <br>
        <input type="Submit">
        </from>
        `);
    res.end();
  })
  .listen(2002);
