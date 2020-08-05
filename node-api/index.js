const express = require('express')
const bodyParser = require('body-parser') // 中间件解析前端传入数据
const app = express()
const Mock = require('mockjs')
const port = 8082
//设置跨域访问
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=UTF-8')
  next()
})
/*
 接口请求：带参数的
 get请求获取前端传入的参数：req.query,
 post请求获取前端传入的参数：req.body
*/
app.use(bodyParser.json())

// TODO:连接数据库
let mysql = require('mysql')
let db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'jy18917092529',
  database: 'web_vue',
})
db.connect((err) => {
  if (err) {
  } else {
    console.log('ok')
  }
})

app.post('/api/login', (req, res, next) => {
  db.query('SELECT * FROM loginuser;', (err, resdb, fields) => {
    if (err) {
      res.json(
        (data = {
          code: 500,
          msg: '数据库服务器报错',
        })
      )
      throw err
    } else {
      let dataString = req.body
      let stringList = []
      let data
      for (let i in dataString) {
        stringList.push(i)
      }
      if (
        stringList.indexOf('username') > -1 &&
        stringList.indexOf('password') > -1
      ) {
        let userinfo
        for (let i = 0; i < resdb.length; i++) {
          if (dataString.username === resdb[i].username) {
            userinfo = resdb[i]
          }
        }
        if (userinfo) {
          if (userinfo.password === dataString.password) {
            data = {
              code: 200,
              msg: '成功',
            }
          } else {
            data = {
              code: 401,
              msg: '用户名或密码错误',
            }
          }
        } else {
          data = {
            code: 401,
            msg: '查无此用户',
          }
        }
      } else {
        data = {
          code: 400,
          msg: '请求参数错误',
        }
      }
      res.json(data)
    }
  })
})
app.get('/api/getHomeData', (req, res, next) => {
  let data = Mock.mock({
    code: 200,
    data: {
      'id|1000-2000': 2000,
      name: '@cname',
      'star|0-5': '*',
      'address|1': ['北京', '上海', '浙江'],
    },
    msg: '成功',
  })

  res.json(data)
})

app.get('/api/getOneData', (req, res, next) => {
  let dataString = req.query
  let stringList = []
  let data
  for (let i in dataString) {
    stringList.push(i)
  }
  if (stringList.indexOf('name') > -1 && stringList.indexOf('code') > -1) {
    data = Mock.mock({
      code: 200,
      'data|10-20': [
        {
          'id|1000-2000': 2000,
          name: '@cname',
          'star|0-5': '*',
          'address|1': ['北京', '上海', '浙江'],
        },
      ],
      msg: '成功',
    })
  } else {
    data = Mock.mock({
      code: 400,
      data: [],
      msg: '请求参数错误',
    })
  }
  res.json(data)
})
app.post('/api/getTwoData', (req, res, next) => {
  let dataString = req.body
  let stringList = []
  let data
  for (let i in dataString) {
    stringList.push(i)
  }
  if (stringList.indexOf('name') > -1 && stringList.indexOf('code') > -1) {
    data = Mock.mock({
      code: 200,
      'data|10-20': [
        {
          'id|1000-2000': 2000,
          name: '@cname',
          'star|0-5': '*',
          'address|1': ['北京', '上海', '浙江'],
        },
      ],
      msg: '成功',
    })
  } else {
    data = Mock.mock({
      code: 400,
      data: [],
      msg: '请求参数错误',
    })
  }
  res.json(data)
})
app.listen(port, () => console.log(`example app is listening on port ${port}`))
// TODO:使用mock+axios+vue测试接口请求数据
