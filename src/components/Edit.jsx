import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/edit.css'

export default function Edit(props) {

    //need to add valitation method to the saveEdit function + make an option to change the password input type from text to passsword and back again

    const nav = useNavigate();
    const saveEdit=()=>{
        props.users.find((val)=>{if(val.id===props.currentUser.id){
            val.id=props.editID;
            val.name=props.editName;
            val.password=props.editPassword;
            val.amount=props.editAmount;
            console.log(val)
            console.log(props.currentUser)
            props.currentUser.id=props.editID;
            props.currentUser.name=props.editName;
            props.currentUser.password=props.editPassword;
            props.currentUser.amount=props.editAmount;
            // nav(`/${val.name}`)
            props.setName(val.name)
        }})
        nav(`/${props.currentUser.name}`)
        // console.log(props.currentUser)
        
        // let div1 = document.getElementById('divEdit1');
        // let div2 = document.getElementById('divEdit2');
        // let btn1 = document.getElementById('editBtn1');
        // let btn2 = document.getElementById('editBtn2');
        // div1.style.display = 'flex';
        // div2.style.display = 'none';
        // btn1.style.display = 'inline-block';
        // btn2.style.display = 'none';

        // props.setCurrentUser(props.editName)
    }
    return (
    <div>
        <div id='divEdit1'>
            <p><b>id:{props.currentUser.id}</b></p><br/>
            <p><b>name:{props.currentUser.name}</b></p><br/>
            <p><b>password:{props.currentUser.password}</b></p><br/>
            <p><b>amount:{props.currentUser.amount}</b></p><br/> 
        </div><br/>
        <div id='divEdit2' style={{display:'none'}}>
            <input onChange={(e)=>{props.setEditID(e.target.value)}} type='text' placeholder='id'/><br/>
            <input onChange={(e)=>{props.setEditName(e.target.value)}} type='text' placeholder='name'/><br/>
            <input onChange={(e)=>{props.setEditPassword(e.target.value)}} type='text' placeholder='pass'/><br/>
            <input onChange={(e)=>{props.setEditAmount(e.target.value)}} type='text' placeholder='amount'/><br/>
        </div>
        <button className='editBtns' id='editBtn1' onClick={props.edit}>Edit user</button><br/>
        <button className='editBtns' id='editBtn2' onClick={()=>{saveEdit()}}>Save</button>
    </div>
    )
}
