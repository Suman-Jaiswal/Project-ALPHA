const express =  require('express');
const pug =  require('pug');
const path =  require('path');
const fs =  require('fs');
const app = express();
const port = 5000;

app.use('/static' , express.static('static'))
app.use(express.urlencoded())

app.set('view engine' , 'pug')
app.set('views' , path.join(__dirname , 'views'))

app.get('/' , (req , res) => {
  const params = {}
  res.status(200).render('home.pug' , params);
});
app.get('/contact' , (req , res) => {
  const params = {}
  res.status(200).render('contact.pug' , params);
});




app.listen( port , ()=>{
  console.log(`the app is on the port: ${port}`);
});