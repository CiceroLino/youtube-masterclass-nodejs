const os = require('os');

// const freemem = os.freemem;
// const totalmem = os.totalmem;
const { freemem, totalmem } = os;

const total = parseInt(totalmem() / 1024 / 1024);
const mem = parseInt(freemem() / 1024 / 1024);
// console.log(`${parseInt(freemem() / 1024 / 1024)} MB` ,totalmem());
const percents = parseInt((mem / total) * 100);

console.log(mem, total, percents);