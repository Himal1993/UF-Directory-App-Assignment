/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here */
  code: {type: String, required: true},				//code must be a string and it must be entered
  name: {type: String, required: true},
  coordinates: {												//might not work. meta lets you define nested objects
  			latitude: Number,
  			longitude: Number	
  },
  address: String,
  created_at: Date,										//date record was created
  updated_at: Date      								//date whenever it is modified or saved
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {			//on every save, add the date
  /* your code here */
  var currentDate = new Date();			//get the current date
  this.updated_at = currentDate;		//change the updated_at field to current date
  //if created_at doesn't exist, add to that field. In other words, make the updated_at also the created_at
  if(!this.created_at)
  	this.created_at = currentDate;
  next();

});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
