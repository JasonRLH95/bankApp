import React from 'react'
import HistoryItem from './HistoryItem';
import './style/history.css';

export default function History(props) {
    const checkHistory=()=>{
        if(props.expensesArr.length!==0){
            console.log(props.expensesArr)
            return props.expensesArr.map((val,inx)=>{
                return <HistoryItem val={val} inx={inx}/>
            })
        }
        else{return <p>There is no any expenses yet</p>}
    }
    return (
        <div id='historyMainDiv'>
            <h3 id="historyHeader">My expenses:</h3>
            {checkHistory()}
        </div>
    )
}
