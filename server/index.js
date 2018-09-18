const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const app = express();
const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`server running in port port ${port}`);
});
