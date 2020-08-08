import React from 'react';
import {connect} from 'react-redux';
import {v4} from 'uuid';
import {Link} from 'react-router-dom';
import View from './ExpenseList'
import moment from 'moment'


const Editor = (props) => {
    const data = View(props);
    return (
        <div>

                {
                    data.map((element)=>(
                        <div className="div div2">
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
                            <Link to={`/edit/${element.id}`} className="link">Edit</Link>
                        </div>
                        </div>
                    ))
                }

        </div>
    )
}


const mapStatetoProps = (state) => ({expenses:state.expenses,filters:state.filters}) 

export default connect(mapStatetoProps)(Editor)