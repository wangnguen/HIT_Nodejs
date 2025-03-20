const express = require("express");
const app = express();
const morgan = require("morgan");
const httpStatus = require("http-status-codes");
const homeRoute = require("./routes/homeRoute");
const profileRoute = require("./routes/profileRoute");
const jsonTestRoute = require("./routes/jsonTestRoute");

require("dotenv").config();
app.use(morgan("dev"));
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "./views");

const PORT = process.env.PORT || 3000;

app.use("/", homeRoute);
app.use("/profile", profileRoute);
app.use("/jsontest", jsonTestRoute);

app.listen(PORT, () => {
	console.log(`App listen in port ${PORT}`);
});
