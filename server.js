const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const PORT = process.env.PORT || 3000;
const app = express();

//Middle ware for login/ Business/Org
app.use(express.urlencoded({extended: true}));
app.use(express.json());


if(process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

//adding routes to the API and view
app.use(routes)