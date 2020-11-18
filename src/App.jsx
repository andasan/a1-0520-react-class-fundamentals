import React, { Component } from 'react'
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

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

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render() {
        const { monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return (
            <div className="App">
                <h1>Monsters</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList data={filteredMonsters} />
            </div>
        )
    }
}

export default App;
