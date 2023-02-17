import express from "express";
import mysql from "mysql";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database: "test"
})

app.get("/", (req,res) => {
    res.json("welcome to the backend")
})

app.listen(3000, () => {
    console.log("connected to backend")
})