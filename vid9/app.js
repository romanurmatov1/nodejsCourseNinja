var fs = require('fs');

// var text = fs.readFileSync('test.txt', 'utf8');
// // console.log(text);
// fs.writeFileSync('test2.txt', text);

// fs.readFile('test.txt', 'utf8', function(err, text) {
//    console.log(text);
// });
// fs.mkdirSync('test');
fs.mkdirSync('test', function(){
   fs.writeFileSync('test.txt', 'salom');
});