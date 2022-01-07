const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "exam",
};
// async function connectioncheck() {
//   const Connection = mysql.createConnection(dbinfo);
//   await Connection.connectAsync();
//   console.log("Connection success...");
//   await Connection.endAsync();
// }

// connectioncheck();

async function addmessage(message) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `INSERT INTO message(message)values(?)`;
  await connection.queryAsync(sql, [message.message]);
  await connection.endAsync();
}
async function getmessage(message) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `Select * from message`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  return list;
}
module.exports = { addmessage, getmessage };
const message = { message: "HELLO" };
addmessage(message);
