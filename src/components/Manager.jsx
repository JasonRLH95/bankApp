import React from 'react';
import { useNavigate } from 'react-router-dom';
import Client from './Client';
import './style/manager.css'

export default function Manager(props) {
    const nav = useNavigate();
    return (
    <div id='managerMainDiv'>
        <h3>Manager page</h3>
            <button id='manager-exitBtn' onClick={()=>{nav('/bankApp')}}>Exit</button>
        <div id='usersDiv'>
        {props.users.map((val,inx)=>{
            if(inx!=0){
                return <div key={inx} id={`client${inx}`}><Client name={val.name} expenses={val.expenses} inx={inx}/></div>
            }
        })}
        </div>
    </div>
    )
}
