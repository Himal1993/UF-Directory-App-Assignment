'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
    listOfData = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);
/*var connection = mongoose.connection;
connection.on("connected", function(){
  console.log("connected to database");
})*/

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
var listOfData;
var entries = listOfData.entries;

//function fillData () {
  for(var i = 0; i < entries.length; i++){
    if(entries[i].code && entries[i].name){
      var finalList = new Listing({
       code: entries[i].code,
       name: entries[i].name
     })
    }
    if(entries[i].address != undefined) {
      var finalList = new Listing ({
        code: entries[i].code,
        name: entries[i].name,
        address: entries[i].address
      });
    }
    if(entries[i].coordinates != undefined) {
      var finalList = new Listing({
        code: entries[i].code,
        name: entries[i].name,
        coordinates: {
          latitude: entries[i].coordinates.latitude,
          longitude: entries[i].coordinates.longitude
        }
      });
    }
    if(entries[i].coordinates != undefined && entries[i].address != undefined) {
      var finalList = new Listing ({
        code: entries[i].code,
        name: entries[i].name,
        coordinates: {
          latitude: entries[i].coordinates.latitude,
          longitude: entries[i].coordinates.longitude
        },
        address: entries[i].address
      });
    }
  //    var finalList = new Listing ({
  //      code: entries[i].code;
  //      name: entries[i].name;
  //    })
    finalList.save();
  };
//  console.log('Import complete!');
//};

//fillData();


/*
var listOfData;
var entries = listOfData.entries;

  for (var i = 0; i < entries.length; i++) {
    var updatedCode = null,
        updatedName = null,
        updatedLatitude = null,
        updatedLongitude = null,
        updatedAdress = null;
    if(entries[i].coordinates != undefined){
        updatedCode = entries[i].code,
        updatedName = entries[i].name,
        updatedLatitude = entries[i].coordinates.latitude,
        updatedLongitude = entries[i].coordinates.longitude
    }
    if(entries[i].address != undefined){
        updatedCode = entries[i].code,
        updatedName = entries[i].name,
        updatedAdress = entries[i].address
    }
    if(entries[i].coordinates != undefined && entries[i].address != undefined){
        updatedCode = entries[i].code,
        updatedName = entries[i].name,
        updatedLatitude = entries[i].coordinates.latitude,
        updatedLongitude = entries[i].coordinates.longitude,
        updatedAdress = entries[i].address
    }
    var newList = new Listing({
        code: updatedCode,
        name: updatedName,
        coordinates: {
          latitude: updatedLatitude,
          longitude: updatedLongitude
        },
        address: updatedAdress
    });
    newList.save(function(err){
      if (err)
        throw err;
    });
  }
*/



/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */