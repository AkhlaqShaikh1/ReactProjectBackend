const express = require("express");
const connect = require("./Database/config");
const routes = require("./routes/index");

const app = express();
const port = 3000;
app.use(express.json());
connect();

app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
