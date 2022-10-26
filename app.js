const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://web-site:w5VQKJ50waoPTpTG@cluster0.ip8gj2j.mongodb.net/?retryWrites=true&w=majority').then((result) => {
  console.dir(result);
}).catch((err) => {
  console.log('Error', err);
}) 