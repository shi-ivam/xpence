import React from 'react';
import {connect} from 'react-redux';
import View from './ExpenseList';
import {v4} from 'uuid';
import {Link} from 'react-router-dom';
import SortInput from './SortInput'
import moment from 'moment';


class Dashboard extends React.Component{
    handleDelete = (e) => {
        const id = e.target.id;
        this.props.dispatch({
            type:'REMOVE',
            id
        })
        localStorage.expenses = JSON.stringify({expenses:this.props.expenses.filter(element => element.id !== id)})
    }
    render(){
        let data = View(this.props);
        let p = 0;
        data.forEach(element => {
            p = p + parseFloat(element.cost)
        });
        return (
            <div className="levis">
                <div className="sorter">
                <div className="dashboard-info-section">
                <h3 className="total-data">Your Total Expense is {p}</h3>
                <Link to="/add" className="add-button">Add Expense</Link>
                <SortInput/>
                </div>
                </div>

                <div className="list-header">
                    <h3 className="list-heading">
                        Expenses
                    </h3>
                </div>

                {
                    data.map((element)=>(
                        <div className="div">
                        <div className="items">
                            <div className="">
                            <h2>{element.name}</h2>
                            <p>{element.description}</p>
                            </div>
                            <div className="date-data">
                            <h2>{element.cost}</h2>
                            <p>{moment(element.date).format('MMM DD YYYY')}</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="btn-to" id={element.id} onClick={this.handleDelete}>Delete</button>
                            <Link to={`/edit/${element.id}`} className="link">Edit</Link>
                        </div>
                        </div>
                    ))
                }

            </div>
        )
    }
}


const mapToStateProp = (state,ownProps) => ({expenses:state.expenses,filters:state.filters,history:ownProps.history})

const ConnectedDashboard = connect(mapToStateProp)(Dashboard)

export default ConnectedDashboard;