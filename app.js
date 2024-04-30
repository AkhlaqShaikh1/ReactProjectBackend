const express = require("express");
const connect = require("./Database/config");
const routes = require("./routes/index");

const app = express();
const port = 3000;
connect();

app.use("/", routes);
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
