import React from 'react';
import {connect} from 'react-redux';

// const handleSorting (state) => {
//     if (state.filters.sortBy == )
// }


class Sorter extends React.Component{
    render(){
        return (
            <h1>Sorter</h1>
        )
    }
}






const mapStatetoProps = (state) => ({filters:state.filters,expenses:state.expenses})

const ConnectedSorter = connect(mapStatetoProps)(Sorter)

export { ConnectedSorter }