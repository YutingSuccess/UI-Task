export function getEmployees() {
    const employees = [
        {type: 'Management', name: 'Alex', salary: 50000, receptionHours: 10},
        {type: 'Employees', name: 'Bob', salary: 45000, workplaceNumber: 2110, lunchtime: '12:00'}
    ];
    return {
        type: 'GET_EMPLOYEES',
        payload: employees
    };
}

export function  addEmployees(newEmployee) {
    return {
        type: 'ADD_EMPLOYEES',
        payload: newEmployee
    };
}
