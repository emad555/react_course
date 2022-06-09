import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

//import useState to use it inside the button function
import React, {useState} from 'react';

let c = 0;
const ExpenseItem = (props) => {
    
    //create a list variable for the state, the first element is the current state and the second one the the future state
    const [title, setTitle] = useState(props.title);

    //create a function for changing the state using a button
    const clickHandler =() =>{
        //here we set the new state value
        setTitle("Title: " + c);
        c++;
        console.log('Clicked');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date ={props.date}/>
            <div className="expense-item__description">
                <div> <h2>{title}</h2></div>
                <div className="expense-item__price"> ${props.amount}</div>
            </div>
            {/* create a button and to use the clickHandler function*/}
            
            {/* <button  className = "input" onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;