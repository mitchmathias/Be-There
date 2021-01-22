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
        body: "We are cleaning up the streets ",
        favs: 6,
        date: new Date(Date.now())
    },
    {
        title: "Uncommon Clean Up",
        photoUrl: "Cleanerupper",
        body: "We are cleaning up the streets  but more extreme",
        favs: 2,
        date: new Date(Date.now())

    },
    {
        title: "Generic donate food",
        photoUrl: "Foodman",
        body: "give us food to the needy ",
        favs: 0,
        date: new Date(Date.now())
    },
    {
        title: "Building shelters for the Homeless",
        photoUrl: "BobTheBuilder",
        body: "we need help building homes",
        favs: 5,
        date: new Date(Date.now())

    }, {
        title: "Generic Blood Donation",
        photoUrl: "BloodMan",
        body: "I need Blood for donations please",
        favs: 3,
        date: new Date(Date.now())
    },
    {
        title: "FoodDrive",
        photoUrl: "FoodTakers",
        body: "GiveUsFood",
        favs: 25,
        date: new Date(Date.now())

    },

];
const userSeed = [
    {
        name: {
            "first": "Luis",
            "last": "Clark"
        },
        username: "freelandlol",
        email: "luis.clark@example.com",
        password: "pass",
        location: {
            "street": {
                "number": 490,
                "name": "Country Club Rd"
            },
            "city": "Lubbock",
            "state": "South Carolina",
            "country": "United States",
            "postcode": 55930,
            "coordinates": {
                "latitude": "36.2902",
                "longitude": "-69.8250"
            }
        }
    },
    {
        name: {
            "first": "Judith",
            "last": "Gordon"
        },
        username: "BloodDrainer4Good",
        email: "judith.gordon@example.com",
        password: "pass",
        location: {
            "street": {
                "number": 506,
                "name": "Camden Ave"
            },
            "city": "Reno",
            "state": "Pennsylvania",
            "country": "United States",
            "postcode": 80058,
            "coordinates": {
                "latitude": "-72.2106",
                "longitude": "-16.8913"
            }
        }
    },
    {
        name: {
            "first": "Freddie",
            "last": "lawson"
        },
        username: "BloodDrainer4Good",
        email: "freddie.lawson@example.com",
        password: "pass",
        location: {
            "street": {
                "number": 410,
                "name": "E Little York Rd"
            },
            "city": "Oakland",
            "state": "California",
            "country": "United States",
            "postcode": 39667,
            "coordinates": {
                "latitude": "-44.8614",
                "longitude": "7.0719"
            }
        }
    }
]
eventDb.Event
    .remove({})
    .then(() => db.Event.collection.insertMany)
