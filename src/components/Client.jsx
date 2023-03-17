import React,{useState} from 'react';
import Expenses from './Expenses';
import './style/client.css'

export default function Client(props) {
    const [clientFlag,setClientFlag] = useState(false);
    const [colorFlag,setColorFlag] = useState(false)

    const showDetails=()=>{
        if(clientFlag===true &&props.inx!=0 &&props.expenses.length!=0){
            return <div key={props.inx}><Expenses expenses={props.expenses}/></div>
        }
        else if(clientFlag===false){
            return null;
        }
    }
    
    const changeColor=()=>{
        if(colorFlag===true){
            let parent = document.getElementById(`client${props.inx}`);
            if(parent!=null){
                let child = parent.children;
                child[0].style.backgroundColor = 'rgb(50, 150, 255)';
            }
        }
        if(colorFlag===false){
            let parent = document.getElementById(`client${props.inx}`)
            if(parent!=null){
                let child = parent.children;
                child[0].style.backgroundColor = 'white';
            }
        }
    }
    return (
    <div onClick={()=>{setClientFlag(!clientFlag);setColorFlag(!colorFlag)}} className='clientDiv'>
        <div className='clientNameDiv'>{props.name}</div>
        <div>{showDetails()}{changeColor()}</div>
    </div>
    )
}
