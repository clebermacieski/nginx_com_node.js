const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Cléber')`
connection.query(sql)
connection.end()


app.get('/', (req,res) => {
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database:'nodedb'
    };
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    
    const sql = `SELECT name FROM people`;  
  
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error
      };
      
      let table = '<table>';
      table += '<tr><th>Inserted Names</th></tr>';
      for(let people of results) {      
        table += `<tr><td>${people.name}</td></tr>`;
      }
  
      table += '</table>';    
      res.send('<h1>FullCycle Rocks!</h1>' + table);    
    });   
    connection.end();
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})