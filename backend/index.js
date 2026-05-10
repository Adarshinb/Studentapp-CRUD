// import
const express=require("express")
var cors = require('cors')
require("./connection")
var stuModel=require("./Model/student")

//initialize express
const app = express()

//middleware
app.use(express.json())
app.use(cors())


//api creation
app.get('/', (req, res) => {
  res.send('Hello World')
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

//update api
app.put('/edit/:id', async (req, res) => {
  await stuModel.findByIdAndUpdate(req.params.id, req.body)
  res.send("data updated")
})


//port setting 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})