import React from 'react';
import {connect} from  'react-redux';
import {DateRangePicker} from 'react-dates';


class SorterInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            focusedInput:null,
            startDate:props.filters.startDate,
            endDate:props.filters.endDate
        }
    }
    handleChange = (e) => {
        let sort = e.target.options[e.target.selectedIndex].value;
        this.props.dispatch({type:'SWITCH_FILTER',sort})
    }
    handleOrderChange = (e) => {
        const type = e.target.options[e.target.selectedIndex].value;
        console.log(type)
        this.props.dispatch({type:'SWITCH_ALIGN',align:type})
    }
    handleSearch = (e) => {
        this.props.dispatch({type:'SEARCH_BY_NAME',name:e.target.value})
    }
    handleDateChange = ({ startDate, endDate }) => {
        this.props.dispatch({type:'CHANGE_DATE',startDate,endDate})
        this.setState({
            startDate,endDate
        })
    }
    render(){
        return (
            <div className="sort-input">
                <input className="input-field" placeholder="Name" onChange={this.handleSearch}/>
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.handleDateChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    isOutsideRange={()=>(false)}
                />
                <select className="select-option" onChange={this.handleChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <select className="select-option" onChange={this.handleOrderChange}>
                    <option value="ascend">Ascend</option>
                    <option value="descend">Descend</option>
                </select>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {filters:state.filters}
}



export default connect(mapStatetoProps)(SorterInput);