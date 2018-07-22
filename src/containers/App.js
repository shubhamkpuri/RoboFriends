import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component{
    constructor(){
        super();
        this.state ={
            robots : [],
            searchfield:''
        }

    }
    onSearchChange = (event) => {
        this.setState({ searchfield :event.target.value});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots:users}) )
    }
    render (){
        const {searchfield, robots } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        if(robots.length === 0){
            return (
                <div className="text-center">

                    <h1 className="mt-5"> Robo Friends </h1>
                    <SearchBox  searchChange={this.onSearchChange}/>
                    <hr/>
                     <h1 className="text-center"> Loading... </h1>
                </div>
            );
        }else{
            return (
                <div className="text-center">

                    <h1 className="mt-5"> Robo Friends </h1>
                    <SearchBox  searchChange={this.onSearchChange}/>
                    <hr/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }

}
export default App;
