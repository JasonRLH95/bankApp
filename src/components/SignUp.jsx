import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/signup.css'

export default function SignUp(props) {
    const nav = useNavigate()
    const [passFlag1,setPassFlag1] = useState(false);
    const showPass1=()=>{
        const input = document.getElementById('passInput1')
        if(passFlag1===false){
            input.removeAttribute('type');
            input.setAttribute('type','text')
        }
        else if(passFlag1===true){
            input.removeAttribute('type');
            input.setAttribute('type','password')
        }
    }
    const saveUser=()=>{
        let cnt=0;
        if(props.id.length!=9){
            cnt++;
            return alert('ID must contain exactly 9 numbers!')
        }
        if(props.name.length<2){
            cnt++;
            return alert('Name must contain at least 2 letters')
        }
        if(props.name.length>=2){
            for(let i=0;i<props.name.length;i++){
                if(props.name[i]>='a'&&props.name[i]<='z'){
                    continue;
                }
                if(props.name[i]>='A'&&props.name[i]<='Z'){
                    continue;
                }
                else{
                    cnt++;
                    return alert("Name must contain only English letters!!")
                }
            }
        }
        if(props.password.length<6){
            cnt++;
            return alert('Password must include 6 characters at least!!')
        }
        if(props.amount.length===0){
            cnt++;
            return alert('Must include amount!!')
        }
        if(props.amount.length!=0){
            if(props.amount<0||props.amount>1000000){
                cnt++;
                return alert('Amount value must be between 0 to 1,000,000 NIS')
            }
        }
        if(cnt===0){
            let user = new props.class(props.id,props.name,props.password,props.amount);
            props.setCurrentUser(user);
            props.setUsers([...props.users,user]);
            nav(`/${props.name}`);
        }
    }
    return (
        <div id='signupDiv'>
            <div id='signupInputsDiv'>
                <input className='signupInputs' onChange={(e)=>{props.setID(e.target.value)}} type='text' placeholder='id'/><br/>
                <input className='signupInputs' onChange={(e)=>{props.setName(e.target.value)}} type='text' placeholder='name'/><br/>
                <input className='signupInputs' id='passInput1' onChange={(e)=>{props.setPassword(e.target.value)}} type='password' placeholder='pass' maxLength={20}/><button id='showPass1' onClick={()=>{setPassFlag1(!passFlag1);showPass1()}}></button><br/>
                <input className='signupInputs' onChange={(e)=>{props.setAmount(e.target.value)}} type='text' placeholder='amount'/><br/>
            </div>
            <button className='signupBtns' id='signupBtn1' onClick={()=>{saveUser()}}>Save user</button><br/>
            <button className='signupBtns' id='signupBtn2' onClick={()=>{nav('/')}}>Back</button>
    </div>
    )
}
