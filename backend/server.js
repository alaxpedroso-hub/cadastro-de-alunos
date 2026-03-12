const express = require('express');
const mysq = require('mysq12');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const conexao = mysql.createconnection({
    host: 'localhost',
    user: 'root',
    passaword:'',
    database: 'escola',
})