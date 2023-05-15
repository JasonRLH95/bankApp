import React from 'react';
import './style/historyItem.css';

export default function HistoryItem(props) {
    return (
    <div key={props.inx} className='historyItem'>
        <p><b>To:</b> {props.val.company}</p>
        <p><b>Amount:</b> {props.val.amount}</p>
    </div>
    )
}
