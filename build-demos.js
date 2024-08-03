const fs = require('fs');

const demos = fs.readdirSync('./src/components/demos');

console.log(demos);