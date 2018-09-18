require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const massive = require("massive");
const ctrl = require("./productCtrl");
//server creation
const app = express();
//stating port
const port = process.env.port || 3001;


app.use(cors())
app.use(json())
app.use(require("body-parser").text())
//made cookie
app.use(
  session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
      maxAge:10000
    }
  })
)
//connected to db
massive(process.env.CONNECTION_STRING).then(dbinstance =>{
  app.set("db", dbinstance)
})
//test endpoint
app.get("/api/test", (req, res, next) => {
  res.sendStatus(200);
});
//endpoints
app.get("/api/products", ctrl.getProducts);
app.get("/api/tops", ctrl.getTops);
app.get("/api/bottoms", ctrl.getBottoms);
app.get("/api/acessorys", ctrl.getAcessorys);
//checking on server
app.listen(port, () => {
  console.log(`server running in port port ${port}`);
});
