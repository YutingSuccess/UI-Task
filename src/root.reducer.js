import {combineReducers} from 'redux';
import  EmployeesReducer from './employees.reducer';

const rootReducer = combineReducers({
    employees: EmployeesReducer,
});

export default rootReducer;