const express = require("express"); //return express object
const cors = require("cors");

//creates the server
const app = express();
//Settings
//enable cors
app.use(cors());
app.set("port", process.env.PORT || 4000);

//Middleware
app.use(express.json({ extended: true })); //to access json data


//Routes
app.use("/investigadores", require("./routes/investigadoresRoutes"));
app.use("/programas", require("./routes/programasRoutes"));



app.listen(app.get("port"), () => {
  console.log("...Running on port", app.get("port"));
});
