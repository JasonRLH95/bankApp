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
  
  const add=(amount,company,crntUser)=>{
    let temp = {amount:amount,company:company};
    crntUser.setExpenses(temp)
    currentUser.amount -= temp.amount;
  }


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

  return (
    <div className="App">
      <h1 id='head1'>Jason's-Bank {`\n`} <p id='rightsP'>&reg; JasonR95</p></h1>
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
    </div>
  );
}

export default App;