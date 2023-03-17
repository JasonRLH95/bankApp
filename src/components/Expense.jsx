import React from 'react'

export default function Expense(props) {
    return (
    <div key={props.inx}>{props.expense.company} | {props.expense.amount}₪</div>
    )
}
