import  React, {Component} from 'react';
import {connect} from 'react-redux';
import  {getEmployees} from './employees.action';
import AddEmployees from './AddEmployees';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            flag: false
        }
    }

        componentDidMount(){
            this.props.getEmployees();

        }

        handleClickManagement=()=> {
            const management = this.props.employees.filter((employees)=>{
                return employees.type === 'Management'
            });
            this.setState({data: management});
        }
        handleClickEmployees = () => {
            const employeeType = this.props.employees.filter((employees)=>{
                return employees.type ==='Employees'
            });
            this.setState({data: employeeType});
        }

        handleEditEmployee=()=>{

        }

        renderTableHeader = ()=>{
            const {data} = this.state;
            if(Object.keys(data).length > 0){
                let header = Object.keys(data[0]);
                return header.map((key, index)=>{
                    return (<th key={index}>{key}</th>)
                });
            }
        }

        render()
        {
            const {data} = this.state;
            return (
                <div>
                    <h3>Type Of Employees:</h3>
                    <div>
                        <button onClick={this.handleClickManagement}>Management</button>
                    </div>
                    <div>
                        <button onClick={this.handleClickEmployees}>Employees</button>
                    </div>
                    <div>
                        <table className="table table-bordered">
                            <thead>
                            <tr>{this.renderTableHeader()}</tr>
                            </thead>
                            <tbody>
                            {
                                data && data.length >0 && data.map((d, index) => {
                                    return (
                                        <tr key={index}>
                                            {
                                                Object.keys(d).map(e => {
                                                    return (
                                                        <td>{d[e]}</td>

                                                    );
                                                })
                                            }
                                            <td>
                                                <button onClick={this.handleEditEmployee}>Edit</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                        </table>
                    </div>

                    <AddEmployees></AddEmployees>
                    {/*<div>Type: {this.state.employees && this.state.employee[0].type}</div>*/}
                    {/*<div>Name: {this.state.employee[0].name}</div>*/}
                    {/*<div>Salary: {this.state.employee[0].salary}</div>*/}
                    {/*<div>ReceptionHours: {this.state.employee[0].receptionHours}</div>*/}
                </div>


            )
        }
    }

    function mapStateToProps({employees}){
        return {
        employees
        }
    }

export default connect(mapStateToProps, {getEmployees}) (Employees);