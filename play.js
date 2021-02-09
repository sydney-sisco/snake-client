const { connect } = require('./client');


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};


const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();
console.log('Connecting ...');
connect();
