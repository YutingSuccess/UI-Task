import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {addEmployees} from './employees.action';
import Modal from 'react-modal';

class AddEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            newEmployee:{
                type:'',
                name:'',
                salary: 0,
                receptionHours: 0,
                workplaceNumber:0,
                lunchtime:''
            },
        }
        this.closeModal = this.closeModal.bind(this);
    }

    addEmployeeHandler = (event) => {
        // const newEmployee = {type: 'Management', name: 'Tina', salary: 80000, receptionHours: 20}
        console.log(this.state.newEmployee, 'new!')
        this.props.addEmployees(this.state.newEmployee);
        console.log('add Employee Successful!');
    }

    selectEmployeeHandle =()=>{
        this.setState({newEmployee: Object.assign(this.state.newEmployee, {type:'Employees'})});
    }

    selectManagementHandle=()=>{
        this.setState({newEmployee: Object.assign(this.state.newEmployee, {type:'Management'})});
    }

    showModal = () => {
        this.setState({modalIsOpen: true});

    }
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }
    handleInputChange =(event)=> {
        const field = event.target.name;
        const value = event.target.value;
        const obj = {};
        obj[field] = value;
        this.setState({newEmployee: Object.assign(this.state.newEmployee, obj)});
    }


        render() {
            return (
                <div>
                    <button onClick={this.showModal}>Add</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                    >
                        <h3>Add Employee/Management </h3>
                        <h2>Select a Type</h2>
                        <div>
                            <input type="radio" name="type" value="Employee" onClick={this.selectEmployeeHandle}/>
                            <label htmlFor="emp">Employee</label>
                        </div>
                        <div>
                            <input type="radio" name="type" value="Management" onClick={this.selectManagementHandle}/>
                            <label htmlFor="man">Management</label>
                        </div><br/>
                        <div>
                            <div>
                                <label>
                                    Name: <input type="text" onChange={this.handleInputChange} name="name"/>
                                </label>
                            </div><br/>
                            <div>
                                <label>
                                    Salary: <input type="number" />
                                </label>
                            </div><br/>
                            {this.state.newEmployee.type ==='Employees' && (
                                <div>
                                    <label>
                                        Reception Hours: <input type="number" />
                                    </label>
                                </div>
                            )}
                            {this.state.newEmployee.type === 'Management' &&(
                                <div>
                                    <label>
                                        WorkPlace Number: <input type="number" />
                                    </label>
                                </div>
                            )}<br/>
                            {this.state.newEmployee.type === 'Management' &&(
                                <div>
                                    <label>
                                        Lunchtime: <input type="text" />
                                    </label>
                                </div>
                            )}<br/>
                        </div>

                        <div>
                            <button onClick={this.addEmployeeHandler}>Save</button>
                            <button onClick={this.closeModal}>close</button>
                        </div>
                    </Modal>
                </div>

            );

        }

}
export default connect(null, {addEmployees}) (AddEmployees);