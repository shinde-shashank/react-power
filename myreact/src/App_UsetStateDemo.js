import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app =()=> {
  const [personstate,setPersonsState] = useState(
    {
      persons:[
        {name:"shash", age:3},
        {name:"rupesh", age:2},
        {name:"praful", age:1}
      ],
      otherState:'Some other states'
    }
  );
  const clickMeHandler = ()=>{
    setPersonsState(
      {
        persons:[
          {name:"shashank", age:3},
          {name:"rupesh", age:2},
          {name:"praful", age:12}
        ]
      }
    );
    console.log("you clicked me");
    console.log(personstate);
  }
    return (
      <div className="App">
        <div><button onClick={clickMeHandler}>Click Me</button></div>
        Hi there, we will start from scratch from here
        <Person name ={personstate.persons[0].name} age={personstate.persons[0].age} />
        <Person name ={personstate.persons[1].name} age={personstate.persons[1].age} >My hobies are:</Person>
        <Person name ={personstate.persons[2].name} age={personstate.persons[2].age} />
      </div>

    );
  
};
export default app;
