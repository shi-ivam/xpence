// Default Reducer for Expenses



const defaultExpensesReducer = () => {
    if (!!localStorage.expenses){
        console.log(JSON.parse(localStorage.expenses).expenses)
        return JSON.parse(localStorage.expenses).expenses
    }
    else{
        return []
    }
}




// Only Expenses Reducer required in this scenario


const ExpensesReducer = (state=defaultExpensesReducer(),action) => {
    switch (action.type){
        case 'ADD':
            return state.concat(action.obj)
        case 'REMOVE':
            return state.filter(element => element.id !== action.id)
        case 'EDIT':
            const oldobj = state.find(element => action.obj.id === element.id)
            const newobj = {
                ...oldobj,
                ...action.obj
            }
            return (state.filter(element => element.id !== action.obj.id)).concat(newobj)
        default:
            return state
    }
}

export default ExpensesReducer;