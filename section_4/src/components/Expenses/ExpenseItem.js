import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import React, {useState} from 'react';

let c = 0;
const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.title);

    const clickHandler =() =>{
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
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;