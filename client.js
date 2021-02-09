const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');

    conn.write('Name: SYD');

    // setInterval(function(){ conn.write('Move: down'); }, 50);
    // setInterval(function(){ conn.write('Move: left'); }, 50);
  })

  return conn;
}

module.exports = { connect };
