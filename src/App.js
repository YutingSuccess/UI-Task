import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import AddEmployees from './AddEmployees';
import  './App.css';


class App extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="App">
                <div className="nav">
                    <nav >
                        <ul className="nav-bar" >
                            <li className="nav-item">
                                <Link to="/employees">Employees</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/posts">Posts</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="btn-addEmployee">
                    {this.props.children}
                    {/*<AddEmployees></AddEmployees>*/}
                </div>
            </div>
        );
    }



}

export default App;
