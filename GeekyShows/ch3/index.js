// Path Module

const path = require('path');

// console.log(path.basename('../ch3/index.js'));
// console.log(path.basename(__filename));
// console.log(path.basename(__filename, '.js'));
// console.log(path.dirname(__filename));
console.log(path.join('name', 'path', 'filename', 'indexfile'));
console.log(path.join('name', 'path', 'filename', 'indexfile', '..'));
console.log(path.join(__dirname, 'ali'));
console.log(path.parse(__filename).name);
