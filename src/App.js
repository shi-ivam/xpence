import React from 'react';
import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AddExpense from './Components/AddExpense';
import EditExpense from './Components/EditExpense';
import Editor from './Components/Editor'



// Reducers

import ExpensesReducer from './Reducers/Expenses';
import FilterReducer from './Reducers/Filters';


// End of Reducers


// import { v4 } from 'uuid';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';



// Importing Components

import Header from './Components/Header';
import Dashboard from './Components/Dashboard';

// End of Importing Components



// Store Creation

const store = createStore(combineReducers({
  expenses:ExpensesReducer,
  filters:FilterReducer
}))

// Provider Setup

const TheDashboard = () => (
  <Provider  store={store}>
    <Dashboard/>
  </Provider>
)

const TheAdd = (props) => (
  <Provider history={props.history} store={store}>
    <AddExpense history={props.history}/>
  </Provider>
)

const TheEditExpense = (props) => (
  <Provider history={props.history} store={store}>
    <EditExpense  history={props.history}/>
  </Provider>
)

const TheEditor = () => (
  <Provider store={store}>
    <Editor/>
  </Provider>
)


const AppRouter = () => (
  <Router >
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={TheDashboard}/>
        <Route exact path="/add" component={TheAdd}/>
        <Route path="/edit/:id" component={TheEditExpense} />
        <Route exact path='/edit' component={TheEditor}/>
      </Switch> 
    </div>
  </Router>
)




export default AppRouter
export {store}