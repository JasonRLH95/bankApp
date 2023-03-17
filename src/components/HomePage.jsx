import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style/home.css'

export default function HomePage(props) {
    const [flag,setFlag] = useState(false);
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
    return (
    <div id='homeMainDiv'>
        <h3>Welcome {props.currentUser.name}</h3>
        <div id='homeBtnsRemote'>
        <button className='homeBtns' onClick={()=>{setFlag(!flag)}}>Action</button>
        <button className='homeBtns' onClick={()=>{alert(`Your back account has an amount of - ${props.currentUser.amount}₪`)}}>Balance</button>
        <button className='homeBtns' onClick={()=>{nav('/editDetails')}}>Edit</button>
        <button className='homeBtns' onClick={()=>{nav('/')}}>Exit</button>
        </div>
        <div>{showAction()}</div>
    </div>
    )
}
