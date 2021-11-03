const pool = require("../index");

async function createUserTable(){
  await pool.query(`CREATE TABLE IF NOT EXISTS mysecoundTable(
    userId SERIAL PRIMARY KEY,
    name VARCHAR(20)
  )`)
  console.log("table has been created")
}
createUserTable()