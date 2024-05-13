import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import './signup.css';
import {NavComponent} from './nav.js';
import React,{useState} from 'react';

const SignUp=()=>{
    const [selectedOption, setSelectedOption] = useState('');
    const SignNext=(e)=>{
        e.preventDefault();
        if(selectedOption==='student'){
            window.location.href = '/signin/student';
        }else if(selectedOption==='faculty'){
            window.location.href = '/signin/faculty';
        }
    }
    return(
        <>
        <NavComponent/>
        {/* Login/Signup */}
        <div class="container-fluid row d-flex justify-content-center mx-0 px-0 my-5 ">
        <div class="col-10 col-md-6 mx-2 px-5 my-5 py-4 styleDiv">
            <form id="roleForm" method="post" onSubmit={SignNext}>
                <h3 class="abel-600" style={{color:'#213555'}}>Role</h3>
                <div style={{marginTop: '2rem'}}>
                    <div><input type="radio" name="role" id="student" value="student" onChange={(event) => setSelectedOption(event.target.value)} required ></input><label class="abel-500" style={{fontSize:'1.2rem'}} >&nbsp;Student</label></div>
                    <div><input type="radio" name="role" id="faculty" value="faculty" onChange={(event) => setSelectedOption(event.target.value)}></input><label class="abel-500" style={{fontSize:'1.2rem'}}>&nbsp;Faculty</label><br></br></div>
                </div>
                <button class="btn btn-dark mt-5" type="submit">Continue</button>
                <p class="mt-4 abel-500" style={{fontSize:'1.2rem'}}>Already registered? <a style={{color:'#265073'}} href="login.html">Login now</a></p>
            </form>
        </div>
    </div>
        </>
    );
}

export {SignUp};