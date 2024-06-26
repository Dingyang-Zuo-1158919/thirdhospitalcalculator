const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const http = require('http');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'kcalculatordb.cxweo2aeu1iq.ap-northeast-1.rds.amazonaws.com',
    port: 3306,
    user: "admin",
    password: "ZDYzdy123",
    database: "kcalculator"
});

app.post("/create", (req, res) => {
    const Year = req.body.Year;
    const Month = req.body.Month;
    const Team = req.body.Team;
    const Name = req.body.Name;
    const Result = req.body.Result;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    db.query(
        "INSERT INTO kcalculator.thirdhospitalcal (Year, Month, Team, Name, Result) VALUES (?,?,?,?,?)",
        [Year, Month, Team, Name, Result],
        (err, re) => {
            if(err){
                console.log(err);
            }else {
                res.send("Values Inserted");
            }
        }
    );
});


app.get("/thirdhospitalcal", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    db.query("SELECT * FROM kcalculator.thirdhospitalcal", (err, re) => {
        if(err){
            console.log(err);
        } else {
            res.send(re);
        }
    })
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const sqlStr = 'delete from thirdhospitalcal where id=?';
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    db.query(sqlStr, id, (err, result)=>{
        if(err){
            console.log(err);
            res.status(500).send("error deleting data");
        } else {
            res.send("deleted ok");
        }
    });
});

app.listen(3000, () => {
    console.log("your server is running on port 3000");
});