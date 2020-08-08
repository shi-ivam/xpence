import 'react-dates/initialize';
import React from 'react';
import { connect } from 'react-redux';
import {v4} from 'uuid';
import {store} from '../App'
import {SingleDatePicker} from 'react-dates'
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';



class AddExpense extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:moment().startOf('month'),
            focused:false
        }
    }
    handleAdd = (e) => {
        e.preventDefault();
        const name = e.target.expense.value;
        const date = String(moment(this.state.date));
        const cost = String(e.target.cost.value);
        const description = e.target.description.value ? e.target.description.value : '';
        const obj = {id:v4(),name,date,cost,description};
        // Dispatching the Query

        this.props.dispatch({type:'ADD',obj:obj});
        localStorage.expenses = JSON.stringify(store.getState())

        // Redirecting

        this.props.history.push('/')
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused: focused }))
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleAdd} className="add-input">
                <input className="input name" name="expense" placeholder="Name"/>
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
                <input className="input cost" name="cost" type="number" placeholder="Cost"/>
                <textarea placeholder="Description" name="description" rows="5" cols="80" className="description">

                </textarea>

                <button className="button" type="submit">Submit</button>
            </form>  
            </div>
        )
    }    
}


const mapStatetoProps = (state,props) => {
    return {history:props.history}
}

const ConnectedAdd = connect(mapStatetoProps)(AddExpense)

export default ConnectedAdd;