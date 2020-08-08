// TODO: Change the Ascend Bool to string for better understanding and code


import moment from 'moment';

// Filters Reducer


const defaultfilterReducer = (
    {
        findName:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
        align:'ascend'
    }
)

const filterReducer = (state=defaultfilterReducer,action) => {
    switch (action.type){
        case 'SWITCH_FILTER':
            return {
                ...state,
                sortBy:action.sort,
            }
        case 'SWITCH_ALIGN':
            console.log('Recieved')
            return {
                ...state,
                align:action.align,
            }
        case 'SEARCH_BY_NAME':
            return {
                ...state,
                sortBy:'name',
                findName:action.name}

        case 'CHANGE_DATE':
            return {
                ...state,
                startDate:action.startDate,
                endDate:action.endDate
            }
        default:
            return state
    }
}

export default filterReducer;