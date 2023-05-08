import './App.css';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import Manager from './components/Manager';
import Edit from './components/Edit';

function App() {
  const [id,setID] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [amount,setAmount] = useState('');
  const [currentUser,setCurrentUser]= useState('');
  const [inputAmount,setInputAmount] = useState('');
  const [inputCompany,setInputCompany] = useState('');
  const [editID,setEditID] = useState('');
  const [editName,setEditName] = useState('');
  const [editPassword,setEditPassword] = useState('');
  const [editAmount,setEditAmount] = useState('');
  class User{
    constructor(id,name,password,amount){
      this.id=id;
      this.name=name;
      this.password=password;
      this.amount=amount;
      this.expenses=[];
    }
    setExpenses(temp){
      this.expenses.push(temp)
    }
  }
  const admin = new User('000000000','Admin','Admin1',0);
  const [users,setUsers]= useState([admin]);

  // function:
  // const saveUser=()=>{
  //   let user = new User(id,name,password,amount);
  //   setCurrentUser(user);
  //   setUsers([...users,user]);
  // }
  
  const add=(amount,company,crntUser)=>{
    let temp = {amount:amount,company:company};
    crntUser.setExpenses(temp)
    currentUser.amount -= temp.amount;
    // return alert(crntUser.expenses)
  }


  //I need to make sure that when I sign in or sign up and the page is transfering to the home page, at the same action it's keeps the current user at the relevant hook so it would know any time which user I'm using and add the expenses to the corrrect array for the current user we use ===>> it does!


  const edit=()=>{
    let div1 = document.getElementById('divEdit1')
    let div2 = document.getElementById('divEdit2')
    let btn1 = document.getElementById('editBtn1');
    let btn2 = document.getElementById('editBtn2');
    div1.style.display = 'none';
    div2.style.display = 'block';
    btn1.style.display = 'none';
    btn2.style.display = 'inline-block';
  }
  
  // const saveEdit=()=>{
  //   users.find((val)=>{if(val.id===currentUser.id){
  //     console.log(val)
  //     val.id=editID;
  //     val.name=editName;
  //     val.password=editPassword;
  //     val.amount=editAmount;
  //   }})
  //   console.log(currentUser)
  //   let div1 = document.getElementById('divEdit1')
  //   let div2 = document.getElementById('divEdit2')
  //   div1.style.display = 'flex';
  //   div2.style.display = 'none';
  // }


  return (
    <div className="App">
      <h1 id='head1'>SV-Bank</h1>


      {/* <button style={{display:'none'}} onClick={()=>{console.log(users)}}>show users</button> <br/><br/> */}
      <div id='dynamicApp'>
      <BrowserRouter>
        <Routes>
          <Route path='/Admin' element={<Manager users={users}/>}/>
          <Route path='/bankApp' element={<SignIn admin={admin} users={users} setCurrentUser={setCurrentUser} currentUser={currentUser} name={name} setName={setName}/>}/>
          <Route path='/Register' element={<SignUp class={User} setCurrentUser={setCurrentUser} setUsers={setUsers} users={users} id={id} name={name} password={password} amount={amount} setID={setID} setName={setName} setPassword={setPassword} setAmount={setAmount} admin={admin}/>}/>
          <Route path={`/${name}`} element={<HomePage setInputAmount={setInputAmount} setInputCompany={setInputCompany} inputAmount={inputAmount} inputCompany={inputCompany} currentUser={currentUser} add={add}   />}/>
          <Route path='/editDetails' element={<Edit setCurrentUser={setCurrentUser} currentUser={currentUser} setEditID={setEditID} setEditName={setEditName} setEditPassword={setEditPassword} setEditAmount={setEditAmount} editID={editID} editName={editName} editPassword={editPassword} editAmount={editAmount} edit={edit} name={name} setName={setName} users={users}/>}/>
        </Routes>
      </BrowserRouter>
      </div>
            {/* <button onClick={()=>{console.log(users)}}>show users</button> <br/><br/> */}
            {/* <button onClick={()=>{console.log(currentUser)}}>show current</button> <br/><br/> */}
    </div>
  );
}

export default App;





// -------all the shield:



// return:
// signup:
// <input onChange={(e)=>{setID(e.target.value)}} type='text' placeholder='id'/><br/>
      // <input onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='name'/><br/>
      // <input onChange={(e)=>{setPassword(e.target.value)}} type='text' placeholder='pass'/><br/>
      // <input onChange={(e)=>{setAmount(e.target.value)}} type='text' placeholder='amount'/><br/>
      // <button onClick={()=>{saveUser()}}>save user</button><br/><br/><br/>


// home:action:
      // <input onChange={(e)=>{setInputAmount(e.target.value)}} type='text' placeholder='amount'/><br/>
      // <input onChange={(e)=>{setInputCompany(e.target.value)}} type='text' placeholder='company'/><br/>
      // <button onClick={()=>{add(inputAmount,inputCompany,currentUser)}}>Add</button><br/><br/><br/>


// home:edit:
      {/* <div id='divEdit1' style={{width:'100px',margin:'auto',textAlign:'left',height:'120px',display:'flex',flexDirection:'column',justifyContent:'space-evenly',lineHeight:'0'}}>
      <p><b>id:{currentUser.id}</b></p><br/>
      <p><b>name:{currentUser.name}</b></p><br/>
      <p><b>password:{currentUser.password}</b></p><br/>
      <p><b>amount:{currentUser.amount}</b></p><br/> 
      </div><br/>
      <div id='divEdit2' style={{display:'none'}}>
      <input onChange={(e)=>{setEditID(e.target.value)}} type='text' placeholder='id'/><br/>
      <input onChange={(e)=>{setEditName(e.target.value)}} type='text' placeholder='name'/><br/>
      <input onChange={(e)=>{setEditPassword(e.target.value)}} type='text' placeholder='pass'/><br/>
      <input onChange={(e)=>{setEditAmount(e.target.value)}} type='text' placeholder='amount'/><br/>
      </div>
      <button onClick={edit}>Edit user</button><br/>
      <button onClick={saveEdit}>Save</button> */}