import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  
state = {
  persons:[
    {id:"1", name:"shash", age:3},
    {id:"2",name:"rupesh", age:2},
    {id:"3",name:"praful", age:1}
  ],
  showPersons:false
}
clickMeHandler = (newName)=>{
  this.setState(
    {
      persons:[
        {name:newName, age:3},
        {name:"rupesh", age:2},
        {name:"praful", age:12}
      ]
    }
  );
  console.log("you clicked me");
}
personChangedHandler = (event,id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id ===id
  });
  //below will muteate the javascript object which is not recommneded
  //const person = this.state.persons[personIndex];
  const person={...this.state.persons[personIndex]};
  //alertnate apporach about above
  //const person= Object.assign({},this.state.persons[personIndex])
  person.name= event.target.value;
  const persons=[...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons:persons});
}
togglePersonsHandler = ()=>{
 console.log('toggling');
  const doesShow=this.state.showPersons;
 this.setState({showPersons:!doesShow});
}
deletePerson = (personIndex) => {
  
  const persons= this.state.persons;
  persons.splice(personIndex,1);
   this.setState({persons:persons});
}

  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px'

    };
    //code for toggling persons components based on conditions
    let persons=null;
    if(this.state.showPersons){
      persons= (
        <div>
          {this.state.persons.map((person,index) =>{
            return (
              <Person 
              name ={person.name} 
              age={person.age}
              click={()=> this.deletePerson(index)}
              changed={(event)=> this.personChangedHandler(event,person.id)}
              />
            );
          })}
       {/* <Person name ={this.state.persons[0].name} age={this.state.persons[0].age} 
        changed={this.changeNameHandler}/>
        <Person 
        name ={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.clickMeHandler.bind(this,"shashinak!")}
        >
          My hobies are:</Person>
        <Person name ={this.state.persons[2].name} age={this.state.persons[2].age} />
        */}
      </div>
      );
    }
    return (
      <div className="App">
        <div><button 
          style={style} 
          onClick={ this.togglePersonsHandler }>Click Me</button></div>
        {persons}
   </div>
    );
  }
}


class App1 extends Component {
  render(){
    //single line
 // return <div>Hello</div>
  // multiple jxl
  return (
    <div className='App'>Hello there this is just example for multiline</div>
    
  )
  }
}
export default App;
