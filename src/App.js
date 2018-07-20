import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots.js';
import SearchBox from './SearchBox';


class App extends Component{
    constructor(){
        super();
        this.state ={
            robots : robots,
            searchfield:''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield :event.target.value});

        // console.log(filteredRobots);

    }
    render (){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
        <div className="text-center">

            <h1 className="mt-5"> Robo Friends </h1>
            <SearchBox  searchChange={this.onSearchChange}/>
            <hr/>
            <CardList robots={filteredRobots} />
        </div>
    );
    }

}
export default App;
