const os = require('os')

console.log('Platform:');
console.log(`${os.platform()} - ${os.arch()} - version: ${os.release()}`);
console.log(' ');

console.log('CPUs:');
const numberOfCPUs = os.cpus().length;
console.log(`Number of CPUs: ${numberOfCPUs}`);
console.log(`Model: ${os.cpus()[0].model}`);
const TotalSpeed = (os.cpus()[0].speed)*numberOfCPUs/1000;
console.log(`Average speed: ${TotalSpeed} GHz`);
console.log(' ');

console.log('RAM memory:');
// 3x1024 for didactic reasons
console.log(`${(os.totalmem()/1024/1024/1024).toFixed(2)} GB`);