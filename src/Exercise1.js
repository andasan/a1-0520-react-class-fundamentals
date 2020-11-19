import React from 'react';
import './App.css';
import * as variables from "./variables";

class ChildComponent extends React.Component {
  componentWillUnmount(){
    console.log("Child unmounted");
  }
  render(){
    return(
      <h3>Child component</h3>
    )
  }
}

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     something: ""
  //   }
  // }
  
  state = {
    status: true,
    show: true,
  }
  
  componentDidMount(){
    console.log("Component has mounted!");
  }

  componentDidUpdate(){
    console.log("Component has updated!");
  }

  render(){
    //sample prop display on class component
    // console.log(this.props);

    //regular method or functions
    console.log(variables.students);

    return (
      <div className="App">
        <h1>{this.state.status ? "Title 1" : "Title 2"}</h1>
        <button onClick={() => this.setState({ status: !this.state.status })}>Toggle status</button>
        {variables && variables.students.map((student, index) => (
          <p key={index}>{student}</p>
        ))}
        <hr />
        <button onClick={() => this.setState({ show: !this.state.show })}>Toggle show</button>
        {this.state.show ? <ChildComponent /> : null}

      </div>
  );}
}

export default App;
