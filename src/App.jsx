import React, { Component } from 'react'
import CardList from "./components/CardList/CardList";

class App extends Component {
    state = {
        monsters: [],
        searchField: ''
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }))
    }

    render() {
        return (
            <div className="App">
                <h1>Monsters</h1>
                <CardList data={this.state.monsters} />
            </div>
        )
    }
}

export default App;
