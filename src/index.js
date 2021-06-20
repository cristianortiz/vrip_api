const express = require("express"); //return express object

//creates the server
const app = express();
//Settings
app.set("port", process.env.PORT || 3000);

//Middleware
app.use(express.json()); //to access json data

//Routes
app.use("/investigadores", require("./routes/investigadoresRoutes"));

app.listen(app.get("port"), () => {
  console.log("...Running on port", app.get("port"));
});
