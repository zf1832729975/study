const express = require('express')
const app = express()
const router = express.Router()
const http = require('http')
const cors = require("cors")

app.use(express.json())


/**
 * 设置跨越访问
*/
app.all('*', function (req, res, next) {
  console.log('req.path', req.path)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')

  // res.header("Content-Type", "application/jsoncharset=utf-8")
  /* 报错的原因是前后端的请求头没有对应上，解决方法 */
  /* 后端不在设置数据类型，意思就是前端你随意发，我什么都接着。 */
  next()
})

const user = require('./user')

app.use('/my-api/user/list', (req, res) => {
  res.json({
    code: 0,
    data: {
      currPage: 1,
      total: 1,
      pageSize: 10,
      data: user
    }
  })
})



app.use('/', function (req, res) {
  console.log('---------------------------------------------------')
  res.json({
    code: 0,
    msg: '欢迎你'
  })
})





module.exports = app;