import React from 'react'
import HistoryItem from './HistoryItem';
import './style/history.css';

export default function History(props) {
    const checkHistory=()=>{
        if(props.expensesArr.length!==0){
            console.log(props.expensesArr)
            return props.expensesArr.map((val)=>{
                return <HistoryItem val={val}/>
            })
        }
        else{return <p>There is no any expenses yet</p>}
    }
    return (
        <div id='historyMainDiv'>
            {/* <p id='historyXbtn' onClick={()=>{props.setHistoryFlag(false)}}>X</p> */}
            <h3 id="historyHeader">My expenses:</h3>
            {checkHistory()}
        </div>
    )
}
