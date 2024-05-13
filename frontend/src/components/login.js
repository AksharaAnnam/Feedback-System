import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import './signup.css';
import { Link } from 'react-router-dom';
import {NavComponent} from './nav.js';
import React,{useContext, useState} from 'react';
import axios from 'axios';
import { useAuth,AuthProvider } from './AuthContext';
import UserContext from './UserContext.js';

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [invalid,setMsg]=useState('');
    const a = useContext(UserContext);
    // const {isLoggedIn,uname,role, login, logout,setUname,setRole}=useContext(UserContext);
    const loggedIn=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:9000/login',{email,password})
        .then(result=>{
            console.log(result.data);
            if(result.data==="Success"){
                // login();
                // uname=email;
                // role='';
                // setUname(email);
                // setRole('');
                a.login(email,'');
                console.log(a.state.uname);
                window.location.href = '/';
            }else if(result.data==="Incorrect Password!"){
                setMsg(result.data);
            }else if(result.data==="Email not registered!"){
                setMsg(result.data);
            }else if(result.data==="Admin"){
                // login();
                // uname=email;
                // role='admin';
                // setUname(email);
                // setRole('admin');
                a.update(email,'admin');
                window.location.href = '/';
            }
        })
        .catch(err=>console.log(err));
    }
    return(
        <>
        <NavComponent/>
        <h3>{a.state.uname}</h3>
        {/* Login/Signup */}
        <div class="container-fluid row d-flex justify-content-center mx-0 px-0 my-5 ">
            <div class="col-10 col-md-6 mx-2 px-5 my-5 py-4 styleDiv">
                {/* <form id="loginForm" method="post" onSubmit={loggedIn}> */}
                <form id="loginForm" method="post" onSubmit={loggedIn}>
                    <h3 class="abel-600" style={{color:'#213555'}}>Login</h3>
                    <p class="abel-600" style={{color:'#cc2424'}}>{invalid}</p>
                    <div style={{marginTop: '2rem',borderBottom: '1px solid #747264'}} >
                        <label class="abel-500" style={{fontSize:'1.2rem'}} for="uname">Email</label>
                        <input class=" abel-500" type="email" placeholder="Enter email" style={{border: 'none',fontSize: '1.2rem',backgroundColor:'#F0F0F0',width:'100%',
                        outline: 'none'}} name="uname" id="uname" onChange={(event) => setEmail(event.target.value)} required></input>
                    </div>
                    <div style={{marginTop: '2rem',borderBottom: '1px solid #747264'}} >
                        <label class="abel-500" style={{fontSize:'1.2rem'}} for="pword">Password</label>
                        <input class=" abel-500" type="password" placeholder="Enter password" style={{border: 'none',fontSize: '1.2rem',backgroundColor:'#F0F0F0',width:'100%',
                        outline: 'none'}} name="pword" id="pword" onChange={(event) => setPassword(event.target.value)} required></input>
                    </div>
                    <button class="btn btn-dark mt-5" type="submit">Login</button>
                    <p class="mt-4 abel-500" style={{fontSize: '1.2rem'}}>Not yet registered? <Link style={{color:'#265073'}} to="/signup">Register now</Link></p>
                </form>
            </div>
        </div>
        </>
    );
}

export {Login};