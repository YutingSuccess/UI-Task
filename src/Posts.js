import React, {Component} from 'react';
import axios from 'axios';


class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
        componentDidMount() {
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(res => {
                    const arr = res.data;
                    this.setState({data: arr}, ()=>{console.log(this.state.data)});
                    });
        }

        render() {
            return (
               <div>
                   <table>
                       <thead>
                       <tr>
                           <th>UserId</th>
                           <th>ID</th>
                           <th>Title</th>
                           <th>Body</th>
                       </tr>
                       </thead>
                       <tbody>
                       {this.state.data && this.state.data.length>0 && this.state.data.map((d)=>{
                           return(
                               <tr>
                                   <td>{d.userId}</td>
                                   <td>{d.id}</td>
                                   <td>{d.title}</td>
                                   <td>{d.body}</td>
                               </tr>

                           )
                       })}
                       </tbody>
                   </table>
               </div>
            )
        }

}

export default Posts;