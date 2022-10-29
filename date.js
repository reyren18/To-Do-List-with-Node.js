//jshint esversion:6

exports.getDate = function(){
let today = new Date();
let options = { weekday: 'long', 
year: 'numeric',
 month: 'long',
  day: 'numeric' }; // an object to convert our date to a string 
let date = today.toLocaleDateString("en-US", options);
return date;
}
