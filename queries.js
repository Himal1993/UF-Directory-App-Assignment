/* Fill out these functions using Mongoose queries*/

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    link = config.db.uri;

mongoose.connect(link);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    Listing.find({name: "Library West"}, function(err, library){
      if(err)
        throw err;
      console.log(library);
    });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndRemove({code: "CABL"}, function(err, doc){
    if(err)
      throw err;
      console.log("doc");
      })
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({name: "Phelps Laboratory"}, {address: "102 Phelps Lab, Gainesville, FL 32611, United States", coordinates: {latitude: 41.1091195, longitude: -73.8639555}}, {'new': true}, function(err, lab){
    if (err)
      throw err;
    console.log(lab);
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, listing){
    if (err)
      throw err;
    console.log(listing);
   });

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
