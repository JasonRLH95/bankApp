import React from 'react';
import Expense from './Expense';

export default function Expenses(props) {
    return (
    <div>Expenses:<br/>
        {props.expenses.map((val,inx)=>{
            return <div key={inx}><Expense expense={val} inx={inx}/></div>
        })}
    </div>
    )
}
