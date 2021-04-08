const {readFileSync, writeFileSync  } = require('fs')

console.log("start");
//**************************/
const firstFile = readFileSync('./content/first.txt','utf8') // first parameter is path and second is encoding tech
console.log(firstFile);

console.log("first file read successflly");
const secFile= readFileSync('./content/second.txt','utf8') // first parameter is path and second is encoding tech
console.log(secFile);

console.log("Second file read successflly");
//************************/
const addFile= writeFileSync('./content/addFile.txt',`merging the first and secind file 
${firstFile}, ${secFile}`,{flag: 'a'});// not overridding
// console.log(addFile);    
console.log("end");