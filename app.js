const express = require("express")


const app = express()
app.use(express.json());

let pool = require("./db/index")

app.get("/",async(req,res)=>{
  try {
    const Allitems = await pool.query("SELECT * FROM allitemslist")
    console.log(Allitems)
    res.json(Allitems.rows)
  } catch (error) {
    
  }
  
})

module.exports = app;