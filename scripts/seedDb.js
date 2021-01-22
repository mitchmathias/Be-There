const mongoose = require("mongoose");
const eventDb = require("../models");

mongoose.connect(
    process.envMONGODB_URI ||
    "mongodb://localhost/eventlist"
);

const eventSeed = [
    {
        title: "Generic Clean Up",
        photoUrl: "BB&T",
        body:"We are cleaning up the streets ",
        favs: 6,
        date: new Date(Date.now())
    },
    {
        title: "Uncommon Clean Up",
        photoUrl: "Cleanerupper",
        body:"We are cleaning up the streets  but more extreme",
        favs: 2,
        date: new Date(Date.now())
        
    },
    {
        title: "Generic donate food",
        photoUrl: "Foodman",
        body:"give us food to the needy ",
        favs: 0,
        date: new Date(Date.now())
    },
    {
        title: "Building shelters for the Homeless",
        photoUrl: "BobTheBuilder",
        body:"we need help building homes",
        favs: 5,
        date: new Date(Date.now())
        
    },{
        title: "Generic Blood Donation",
        photoUrl: "BloodMan",
        body:"I need Blood for donations please",
        favs: 3,
        date: new Date(Date.now())
    },
    {
        title: "FoodDrive",
        photoUrl: "FoodTakers",
        body:"GiveUsFood",
        favs: 25,
        date: new Date(Date.now())
        
    },
    
];
const userSeed = [
    {
        name: "JakefromStateFarm",
        email: "statefarm@gmail.com",
        password:"khakis",
        city: "Charlotte"
    },
    {
        name: "Bobby",
        email: "bobbyfarm@gmail.com",
        password:"builds",
        city: "Charlotte"
    },
    {
        name: "BB&T",
        email: "BB&T@gmail.com",
        password:"owesMeMoney",
        city: "Charlotte"
    },
]
eventDb.Event
    .remove({})
    .then(() => db.Event.collection.insertMany)
