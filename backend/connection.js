const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user:user@cluster0.ja6rsv3.mongodb.net/ict20?appName=Cluster0")
.then(() => console.log('Connected!'))
.catch((err) => console.log(err))
