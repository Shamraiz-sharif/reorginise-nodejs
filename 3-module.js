// Every file is a module in the javaScript 
// Modules-Encapsulated Code
const names=require('./4-name')
const hiName= require('./5-function');
const data= require('./6-Alternative-flav');
require('./7-mind-grenade')

hiName (names.firstName);
hiName (names.firstName);
hiName ('Muhammad shamraiz');

console.log(data);  // showing the data in the file Alternative