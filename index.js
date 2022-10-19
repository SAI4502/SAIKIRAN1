var fs = require('fs');
var data ='Learn Node FS module';
 
fs.writeFile('newfile.txt', data, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});