// import { connect } from 'react-redux';
import moment from 'moment';


const View = (props) => {
    let startDate = props.filters.startDate;
    let endDate = props.filters.endDate;
    let expenses = props.expenses;
    let sortBy = props.filters.sortBy;
    let align = props.filters.align;
    const findName = props.filters.findName;
    if (sortBy === 'date'){
        let n = expenses.sort((a,b)=>{
            if (moment(a.date).isAfter(moment(b.date))){
                if (align === 'ascend'){
                    return 1
                }
                else {
                    return -1
                }
            }
            else{
                if (align === 'ascend'){
                    return -1
                }
                else {
                    return 1
                }
            }
        })
        n = n.filter((a)=>(moment(a.date).isAfter(moment(startDate))))
        n = n.filter((a)=>(moment(a.date).isBefore(moment(endDate))))
        n = n.filter((expense)=>(String(expense.name).toLowerCase().includes(String(findName).toLowerCase())));
        return n
    }
    else if (sortBy === 'amount'){
        let n = expenses.sort((a,b) => {
            if (parseFloat(a.cost) < parseFloat(b.cost)) {
                if (align === 'ascend'){
                    return -1
                }
                else {
                    return 1
                }
            }
            else{
                if (align === 'ascend'){
                    return 1
                }
                else {
                    return -1
                }
            }
        })

        // Check Time

        n = n.filter((a)=>(moment(a.date).isAfter(moment(startDate))))
        n = n.filter((a)=>(moment(a.date).isBefore(moment(endDate))))
        n = n.filter((expense)=>(String(expense.name).toLowerCase().includes(String(findName).toLowerCase())));
        return n
    }
    else if (sortBy === 'name'){
        console.log(String(findName))
        console.log((moment(startDate)))
        console.log((moment(endDate)))
        let n = expenses.filter((expense)=>(String(expense.name).toLowerCase().includes(String(findName).toLowerCase())));
        
        n = n.filter((a)=>(moment(a.date).isAfter(moment(startDate))))
        n = n.filter((a)=>(moment(a.date).isBefore(moment(endDate))))
        return n
    }
    else{
        return expenses
    }
    
}



// const mapStatetoProps = (state) => ({expenses:state.expenses,filters:state.filters})

export default View