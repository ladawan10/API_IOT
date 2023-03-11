const express = require("express");
const router = express.Router();

const MSSQL = require("./libs/MSSQL");
const formatDateTime = require("./libs/format_datetime");

const dbHost = "10.11.1.65";
const dbUser = "sa_cl";
const dbPass = "Snc@C001ng";
const dbDatabase = "IOT-Cooling";
const conn = new MSSQL(dbUser, dbPass, dbHost, dbDatabase);
const axios = require("axios");


// //! Show All User
// router.get("/showUser", (req, res) => {
//   const sql = "SELECT * FROM TB_UserAdmin_Web ORDER BY U_ID ASC";
//   conn
//     .execute(sql)
//     .then(({ state, query: { recordset } }) => {
//       if (!state) return res.send([]);
//       res.send(recordset);
//     })
//     .catch((err) => res.send(err, { msg: "/admins" }));
// });


//! MC
router.get("/v_jobs", (req, res) => {
  const sql = `SELECT *  FROM V_Jobs where MC_ProductionLine = 'C1' Order by MC_ID ASC `;
  conn
    .execute(sql)
    .then(({ state, query: { recordset } }) => {
      if (!state) return res.send([]);
      res.send(recordset);
    })
    .catch((err) => res.send({err,  msg: "Show MC Error" }));
});

// //! Show All User
router.get("/showUser", (req, res) => {
  const sql = "SELECT * FROM TB_UserName ORDER BY Line ASC";
  conn
    .execute(sql)
    .then(({ state, query: { recordset } }) => {
      if (!state) return res.send([]);
      res.send(recordset);
    })
    .catch((err) => res.send(err, { msg: "Check Error" }));
});

// //! Show Fullname
router.get("/Employee", (req, res) => {
  const sql = "SELECT * FROM Employee";
  conn
    .execute(sql)
    .then(({ state, query: { recordset } }) => {
      if (!state) return res.send([]);
      res.send(recordset);
    })
    .catch((err) => res.send(err, { msg: "Check Error" }));
});


//! checkcounter
router.get("/checkcounter", (req, res) => {
  const sql = `SELECT *  FROM V_Counting`;
  conn
    .execute(sql)
    .then(({ state, query: { recordset } }) => {
      if (!state) return res.send([]);
      res.send(recordset);
    })
    .catch((err) => res.send({err,  msg: "Check Error" }));
});

//! OperationSlip
router.get("/OperationSlip", (req, res) => {
  const sql = `SELECT *  FROM OperationSlip`;
  conn
    .execute(sql)
    .then(({ state, query: { recordset } }) => {
      if (!state) return res.send([]);
      res.send(recordset);
    })
    .catch((err) => res.send({err,  msg: "Check Error" }));
});

module.exports = router;
