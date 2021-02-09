// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;

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

  switch (key) {
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case '1':
      connection.write('Say: Hi!')
      break;
    case '2':
      connection.write('Say: I am long')
      break;
    case '3':
      connection.write('Say: I am a snake')
      break;
    case '4':
      connection.write('Say: How are you?')
      break;
    case '5':
      connection.write('Say: GG')
      break;
    default:
      console.log('you pressed:', key);
  }
};

module.exports = { setupInput };
