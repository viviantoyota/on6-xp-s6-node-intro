var express = require('express');
var bodyParser = require('body-parser');
var book = require('./routes/book');

const app = express();

app.use(bodyParser.json())

app.get("/ping", (request, response) => {
    request.send("pong");
});

app.post("/book", book.create);

app.get("/book", book.list);

app.put("/book/:id", book.update);

app.delete("/book/:id", book.remove);

app.post("/login", book.login);


const PORT = 3001;

app.listen(PORT, () => console.log("Listening on port " + PORT));
