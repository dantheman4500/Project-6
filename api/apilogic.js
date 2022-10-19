// Importing packages, libraries and our API - IGDB
// Please note that the API client ID and key/token are located in the .env. You will not see it on the repo because it is hidden using our gitignore.
var sequelize = require("sequelize");
var db = require ("../models");
var IGDB = require("igdb-api-node");

var igdb = new IGDB ({
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_KEY
});

// I don't think we need this anymore since I can run it on jQuery but keeping just in case. 
// const axios = require('axios');
// const url = `https://api.igdb.com/v4/games&appid=${process.env.API_KEY}`

// Import IGDB API with client code 
// Import client code for IGDB, protect ID and key using .env
const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.igdb.com/v4/search",
  "method": "GET",
  "headers": {
    "cookie": "__cf_bm=Lea4yu3jx6h5429rgUMcl5SffXKeQcKAl6M2B4VB9us-1666143409-0-AYdS2GU7vja7Zmk7LgwE4jb%2Fc%2BzoICSqNzO4LLM9GyRRytKGf16lr8GqtNctIwbQ80AZj%2BpBlXdGnps3hu7XtQ0%3D",
    "client-id": process.env.CLIENT_ID,
    "authorization": process.env.CLIENT_ID,
    "Content-Type": "text/plain"
  },
  "data": "fields *; search \"Final Fantasy\"; limit 100;"
};