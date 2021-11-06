require('dotenv').config()
const express = require('express')
const app = express()
const connection = require('./connection')
const PORT = process.env.PORT || 3000
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    connection.query('select * from users', (err, users) => {
        if (err) {
            throw err
        } else {
            if (users.length === 0) {
                users = []
            }
            res.render('index', { users })
        }
    })
})

app.get('/users/:id', (req, res) => {
    let sql = 'select * from users where id=?'
    connection.query(sql, req.params.id, (err, user) => {
        if (err) {
            throw err
        } else {
            res.render('user', { user: user[0] || {} })
        }
    })
})
app.get('/edit/:id', (req, res) => {
    let sql = 'select * from users where id=?'
    connection.query(sql, req.params.id, (err, user) => {
        if (err) {
            throw err
        } else {
            res.render('edituser', { user: user[0] || {} })
        }
    })
})

app.post('/edit', (req, res) => {
    let sql = 'update users set name=?, age=? where id=?'
    let { name, age, id } = req.body

    connection.query(sql, [name, age, id], (err, user) => {
        if (err) {
            throw err
        } else {
            res.send('fu')
        }
    })
})
app.get('/delete/:id', (req, res) => {
    let sql = 'delete from users where id=?'
    connection.query(sql, req.params.id, (err, user) => {
        if (err) {
            throw err
        } else {
            res.redirect('/')
        }
    })
})
app.post('/create', (req, res) => {
    let sql = 'insert into users (name,age) values(?,?)'
    connection.query(sql, [req.body.name, req.body.age], (err, data) => {
        if (err) throw err
        else {
            res.send('dfdf')
        }
    })
})

app.listen(PORT, () => {
    console.log(`server is up on port: ${PORT}`)
})
