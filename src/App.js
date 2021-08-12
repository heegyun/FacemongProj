import React, {Component} from 'react'
import './App.css';
import Customer from './components/Customer'
const customers = [{
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

class App extends Component {
  render(){
  return (
    <div>
     { 
      customers.map(c =>{
        return(
          <Customer 
            key = {c.id}
            id= {c.id}
            image = {c.image}
            name = {c.name}
            birhday = {c.birthday}
            gender = {c.gender}
            age = {c.age}
            />
        );
      })
     }
    </div>
   );
  }
}

export default App;
