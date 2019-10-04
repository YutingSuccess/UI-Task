
export default function (oldProductsState = [], action) {
    switch (action.type){
        case 'GET_EMPLOYEES':
            return action.payload;
        case 'ADD_EMPLOYEES':
            const empStr = JSON.stringify([...oldProductsState, action.payload]);
            localStorage.setItem('employees', empStr);
            return [...oldProductsState, action.payload];
        default:
            return oldProductsState;
    }
}