const os = require("os");

// for instant display after delayed display
const totalRAMMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
  const freeRAMMemory = (os.freemem() / 1024 / 1024).toFixed(0);
  console.log(`${freeRAMMemory} MB of ${totalRAMMemory} GB`);

setInterval(() => {
  const totalRAMMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
  const freeRAMMemory = (os.freemem() / 1024 / 1024).toFixed(0);
  console.log(`${freeRAMMemory} MB of ${totalRAMMemory} GB`);
}, 1000);
