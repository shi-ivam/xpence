import React from 'react';
import {connect} from 'react-redux';
// import {v4} from 'uuid';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';


class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            focused:false,
            date:moment(props.expense.date)
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.date);
        e.preventDefault();
        const name = e.target.expense.value;
        const date = String(moment(this.state.date));
        const cost = e.target.cost.value;
        const description = e.target.description.value ? e.target.description.value : ''
        const id = this.props.expense.id;

        const obj = { id , name , date , cost , description }

        // Dispatching the Query

        console.log(this.props.dispatch({type:'EDIT',obj:obj}));

        const localExpenses = JSON.parse(localStorage.expenses).expenses

        const oldobj = localExpenses.find(element => this.props.expense.id === element.id)

        const newobj = {
            ...oldobj,
            ...obj
        }

        localStorage.expenses = JSON.stringify({expenses:(localExpenses.filter(element => element.id !== oldobj.id)).concat(newobj)})

        // Redirecting

        this.props.history.push('/')
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused: focused }))
    }
    render(){
    const expense = this.props.expense.name;
    const cost = this.props.expense.cost;
    const description = this.props.expense.description;

    return (
        <form className="add-input" onSubmit={this.handleSubmit} onChange={undefined}>
            <input className="input name" type="text" name="expense" placeholder="Name" defaultValue={expense}/>
            <SingleDatePicker
                date={this.state.date} 
                onDateChange={(date) => {
                    this.setState(()=>{return {date:date}});
                }} 
                focused={this.state.focused} 
                onFocusChange={this.onFocusChange}
                showClearDate={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
            <input className="input cost" type="number" name="cost" placeholder="Amount"  defaultValue={cost}/>
            <textarea className="description" type="text"  name="description" placeholder="Description"  defaultValue={description}/>
            <button className="button" type="submit">Done</button>
        </form>
    )
    }
}


const mapStateToProps = (state,ownProps) => {
    return {history:ownProps.history,expense:state.expenses.find(element => element.id === window.location.href.split('edit/')[1] )}
}

const ConnectedEdit = connect(mapStateToProps)(Edit)

export default ConnectedEdit;