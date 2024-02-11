const express = require("express");

const homeRouter = require("./routes/homes");

const { PORT } = require("./utils/config");
const { connectMongo } = require("./utils/connection");

const app = express();
connectMongo();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/homes", homeRouter);

app.listen(Number(PORT), () => console.log("listening on port", PORT));

//global catch
app.use((err, req, res, next) => {
  console.log(err);
  return res.json({ message: "Seems like something went wrong from our side" });
});
