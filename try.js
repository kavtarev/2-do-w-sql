require('dotenv').config()
const sql = require('mysql2')

const connection = sql.createConnection({
  database: process.env.DATABASE,
  password: process.env.PASS,
  host: 'localhost',
  user: 'root',
})

let text =
  'create table trial(id int auto_increment, name varchar(6) unique,LastName VARCHAR(20) NOT NULL, money int check(money>10),primary key(id))'

/* connection.query(text, (err, data) => {
  if (err) console.log(err)
  else {
    console.log(data)
    console.log('success')
  }
}) */
let sql2 = 'insert into trial(name,Lastname,money) values(?,?,?)'
let user = ['v3a3an', 'jihad', -0]
connection.query(sql2, user, (err, user) => {
  if (err) {
    console.log(err.message, ' ', err.code)
  } else {
    console.log(user)
  }
})
