// import
const express=require("express")
var cors = require('cors')
require("./connection")
var stuModel=require("./Model/student")

//initialize
const app = express()

//midd
app.use(express.json())
app.use(cors())


//api creation
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/sample', (req, res) => {
  res.send('trial message')
})

//add api
app.post('/add', (req, res) => {
  stuModel(req.body).save()
  res.send("data added")
})

// view api
app.get('/view', async (req, res) => {
  var data=await stuModel.find()
  res.send(data)
})

//delete api
app.delete('/remove/:id', async (req, res) => {
  await stuModel.findByIdAndDelete(req.params.id)
  res.send("data deleted")
})

app.put('/edit/:id', async (req, res) => {
  await stuModel.findByIdAndUpdate(req.params.id, req.body)
  res.send("data updated")
})


<<<<<<< Updated upstream
//port setting
=======
//port setting to 3000
>>>>>>> Stashed changes
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})