const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/customers',(req, res)=>{
    res.send([
        {
            'id' : 1, 
            'image' :'https://placeimg.com/64/64/1' ,
            'name' : '푸들',
            'birthday' : '961212',
            'gender' : '남',
            'age' : '2'
          },
          {
            'id' : 2, 
            'image' :'https://placeimg.com/64/64/2' ,
            'name' : '코카스파니엘',
            'birthday' : '960305',
            'gender' : '여',
            'age' : '3'
          },
          {
            'id' : 3, 
            'image' :'https://placeimg.com/64/64/3' ,
            'name' : '치와와',
            'birthday' : '921205',
            'gender' : '남',
            'age' : '5'
          
          }
          
          ]
    );
});

app.listen(port, () => console.log('Running on http://localhost:5000' ));
