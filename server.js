const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes")
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require('passport');

//Middle ware for login/ Business/Org
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize())
app.use(passport.session())


//adding routes to the API and view
app.use(routes);

if (process.env.NODE_ENV == "production") {
    app.use(express.static("/client/build"));
}
// if (process.env.NODE_ENV) {
//     app.use(express.static('client/build'));
//     const path = require('path');
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//   }

// connecnt to Mongo Db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/BeThereDb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


// start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});