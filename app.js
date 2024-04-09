const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.set('view engine','ejs')
app.set('views','./views')

app.use(bodyParser.urlencoded({ extended: false }))

// 라우팅
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/profile', (req, res) => {
    res.render('profile')
  })

app.get('/ICBT', (req, res) => {
    res.render('ICBT')
  }) 

  app.post('/ICBTProc', (req, res) => {
    const s11 = req.body.s11;

    var a = `${s11}`

    res.send(a);

  })

app.get('/CBT', (req, res) => {
    res.render('CBT')
  })

app.get('/EmotionalNote', (req, res) => {
    res.render('EmotionalNote')
  })

app.get('/map', (req, res) => {
    res.render('map')
  })

app.get('/contact', (req, res) => {
    res.render('contact')
  })

app.post('/contactProc', (req, res) => {
    const name = req.body.name;
    const mphone = req.body.mphone;
    const email = req.body.email;
    const memo = req.body.memo;

    var a = `${name} ${mphone} ${email} ${memo}`

    res.send(a);

  })



app.listen(port, () => {
  console.log(`YD 통합 서버가 실행되었습니다. 접속주소 : http://localhost: ${port}`)
})