var PORT = process.env.PORT || 3000;
var fs = require("fs");
var express = require("express");
var path = require("path");

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, response) => {
    return response.sendFile(path.join(__dirname, "/public/index.html"));
});


app.get("*", (req, response) => {
    return response.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Listening on PORT: http://localhost:${PORT}`);
});
