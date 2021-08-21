Array.prototype.myArray = function (func) {
  let arr = []

  for (let i = 0; i < this.length; i++) {
    arr.push(func(this[i]))
  }
  return arr
}

let arr = [1, 2]
let res = arr.myArray((item) => item * 2)
console.log(res)

require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
let mongoose = require('mongoose')
const { Schema, model, Types } = require('mongoose')

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err)
    app.listen(PORT, () => {
      console.log(`server is up on port ${PORT}`)
    })
  }
)

//  Schema and Models

const user = new Schema({
  name: {
    type: String,
    trim: true,
  },
  surname: {
    type: String,
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  roles: { type: [String] },
  skills: { type: [String] },
  accounts: { type: [String] },
  currentProject: {
    type: Types.ObjectId,
    ref: 'projectModel',
  },
})
const project = new Schema({
  customers: { type: [String] },
  managers: [{ type: Types.ObjectId, ref: 'userModel' }],
  workers: [{ type: Types.ObjectId, ref: 'userModel' }],
  tasks: { type: [String] },
  requiredSkills: { type: [String] },
  endDate: {
    type: Date,
  },
  dependencies: [{ type: Types.ObjectId, ref: 'projectModel' }],
})

let UserModel = model('userModel', user)
let ProjectModel = model('projectModel', project)

async function createUser() {
  let rol = ['first', 'second', 3, 4]
  try {
    /*   let user = await UserModel.create({
      name: 'try          ',
      surname: 'try',
      roles: rol,
    })
    let project = await ProjectModel.create({
      endDate: 2000,
      customers: 'g33ug',
      workers: [user._id],
    })
    console.log(project) */
    let project = await ProjectModel.findById('6120dadd52c27317c8c3bc16')
      .populate('workers')
      .exec(function (err, story) {
        if (err) console.log(err)
        console.log(story)
        // prints "The author is Ian Fleming"
      })
  } catch (e) {
    console.log(e)
  }
}
createUser()
;`Данные


Пользователь:

Фамилия

Имя

Отчество

Роли (Менеджер, Дизайнер, Frontend Разработчик...)

Учетные записи

Навыки (например pug, дизайн писем, ...)

Проект

Заказчики (Пока есть только текстовые названия)

Менеджеры (Пользователи)

Задачи

Исполнители (Пользователи)

Продолжительность

Требуемые навыки

Зависимость от других задач`
