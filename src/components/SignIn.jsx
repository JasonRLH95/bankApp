import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style/signin.css'

export default function SignIn(props) {
    const nav = useNavigate()
    const [signinName,setSigninName] = useState('')
    const [signinPass,setSigninPass] = useState('')
    const [passFlag,setPassFlag] = useState(false)
    const check =async()=>{
        // let cnt=0;
        var data={id:'none',name:'none',password:'none',amount:'none'};
        props.users.forEach((val)=>{
                if(signinName===val.name&&signinPass===val.password){data=val;return data}
        })
        // debugger
        if(signinName===props.admin.name&&signinPass===props.admin.password){
            return nav('/Admin')
        }
        else if(signinName===data.name&&signinPass===data.password){
            props.setCurrentUser(data);
            // console.log(data)
            await props.setName(data.name)
            return nav(`/${data.name}`)
        }
        else{
            return alert("user doesn't exist")
        }
    }
    const showPass=()=>{
        const input = document.getElementById('passInput')
        if(passFlag===false){
            input.removeAttribute('type');
            input.setAttribute('type','text')
        }
        else if(passFlag===true){
            input.removeAttribute('type');
            input.setAttribute('type','password')
        }
    }
    return (
    <div id='signinDiv'>
        <input className='signinInputs' onChange={(e)=>{setSigninName(e.target.value)}} type='text' placeholder='name'/><br/>
        <input className='signinInputs' id='passInput' onChange={(e)=>{setSigninPass(e.target.value)}} type='password' placeholder='password' maxLength={20}/>
        <button id='showPass' onClick={()=>{setPassFlag(!passFlag);showPass()}}></button><br/>
        <button className='signinBtns' id='signinBtn1' onClick={check}>Enter</button><br/>
        <button className='signinBtns' id='signinBtn2' onClick={()=>{nav('/Register')}}>New Client</button>
        {/* <button>Already exist</button> */}
    </div>
    )
}
