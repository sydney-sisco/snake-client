const { IP, PORT, PLAYER_INITIALS } = require('./constants');
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');

    conn.write(`Name: ${PLAYER_INITIALS}`);
  })

  return conn;
}

module.exports = { connect };
