const express = require('express')
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
})

app.get('/',(req, res)=>{
    
})

app.listen(3001, ()=>{
    console.log('funciona puerto 3001');
});
