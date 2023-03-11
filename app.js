const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const logger = require("morgan");
const cors = require("cors");
const app = express();

// ! PATH API
const indexRouter = require("./routes/index");

//! PATH ALL
const apiAll = require("./routes/api-all");


app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 30 * 100000,
  })
);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ! PATH API
app.use("/", indexRouter);


//! API ALL
app.use("/api",apiAll)

// app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
