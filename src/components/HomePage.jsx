import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style/home.css';
import History from './History';
import img1 from './images/menu.png';

export default function HomePage(props) {
    const [flag,setFlag] = useState(false);
    const [flagRemote,setFlagRemote] = useState(false);
    const [historyFlag,setHistoryFlag] = useState(false);
    const nav = useNavigate();
    const showAction=()=>{
        if(flag===true){
            return <div>
                        <input className='homeActionInputs' onChange={(e)=>{props.setInputAmount(e.target.value)}} type='text' placeholder='amount'/><br/>
                        <input className='homeActionInputs' onChange={(e)=>{props.setInputCompany(e.target.value)}} type='text' placeholder='company'/><br/>
                        <button id='homeBtn1' onClick={()=>{validateAction()}}>Add</button>
                    </div>
        }
        else{return null}
    }
    const validateAction=()=>{
        if(props.inputAmount<=0||props.inputAmount>props.currentUser.amount){
            return alert('Must insert a valid amount')
        }
        if(props.inputCompany.length===0){
            return alert('Must insert the company name')
        }
        else if(props.inputAmount>0&&props.inputAmount<=props.currentUser.amount){
            props.add(props.inputAmount,props.inputCompany,props.currentUser);
            setFlag(false);
        }
    }
    const showHistory=()=>{
        if(historyFlag===true){
            return <History setHistoryFlag={setHistoryFlag} expensesArr={props.currentUser.expenses}/>
        }
        else{return null}
    }
    const div = document.getElementById('homeBtnsRemote2');
    const showRemote=()=>{
        if(div!==null){
            if(flagRemote===false){
                div.style.animationName='slideOut';
            }
            else{
                div.style.display='flex';
                div.style.animationName='slideIn';
            }
        }
    }
    return (
    <div id='homeMainDiv'>
        <h3>Welcome {props.currentUser.name}</h3>
        <div id='homeBtnsRemote'>
            <button className='homeBtns' onClick={()=>{setFlag(!flag);setHistoryFlag(false)}}>Action</button>
            <button className='homeBtns' onClick={()=>{alert(`Your bank account has an amount of - ${props.currentUser.amount}₪`)}}>Balance</button>
            <button className='homeBtns' onClick={()=>{setHistoryFlag(!historyFlag);setFlag(false)}}>History</button>
            <button className='homeBtns' onClick={()=>{nav('/editDetails')}}>Edit</button>
            <button className='homeBtns' onClick={()=>{nav('/bankApp')}}>Exit</button>
        </div>
        <button id='openRemote' onClick={()=>{setFlagRemote(!flagRemote)}}><img id='image1' src={img1}></img></button>
        <div id='homeBtnsRemote2'>
            <button className='homeBtns' onClick={()=>{setFlag(!flag);setHistoryFlag(false)}}>Action</button>
            <button className='homeBtns' onClick={()=>{alert(`Your bank account has an amount of - ${props.currentUser.amount}₪`)}}>Balance</button>
            <button className='homeBtns' onClick={()=>{setHistoryFlag(!historyFlag);setFlag(false)}}>History</button>
            <button className='homeBtns' onClick={()=>{nav('/editDetails')}}>Edit</button>
            <button className='homeBtns' onClick={()=>{nav('/bankApp')}}>Exit</button>
        </div>
        <div>{showRemote()}</div>
        <div>{showAction()}</div>
        <div>{showHistory()}</div>
    </div>
    )
}
