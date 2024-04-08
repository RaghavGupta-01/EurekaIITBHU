const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './eureka.html'))
})

app.get('/Sakhi', (req, res) => {
  res.sendFile(path.resolve(__dirname, './pages/chatbot.html'))
})
app.get('/Nari_Udyog', (req, res) => {
  res.sendFile(path.resolve(__dirname, './pages/chatbot.html'))
})
// app.get('/Vaani', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './pages/chatbot.html'))
// })nodnodemon
app.get('/Saathi', (req, res) => {
  res.sendFile(path.resolve(__dirname, './pages/chatbot.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
