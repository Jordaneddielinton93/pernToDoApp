let {Pool} = require("pg")

let pool = new Pool({
  user:"postgres",
  password:"Jordanl1352",
  host:"localhost",
  port:5432,
  database:"store"
}
)
module.exports = pool
