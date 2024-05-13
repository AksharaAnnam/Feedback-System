import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import { Link } from 'react-router-dom';
import {NavComponent} from './nav.js';
import image from '../F2.PNG';
import { useAuth,AuthProvider } from './AuthContext';
import UserContext from './UserContext.js';
import {useContext,useEffect} from 'react';

function HomePage(){
    // const { uname, role, login,isLoggedIn,setUname,setRole } = useAuth();
    const a = useContext(UserContext);
    return(
        <>
        <NavComponent/>
        <h3>{a.state.uname}</h3>
        <div class="row mt-4 p-0 mx-0" style={{alignItems: 'center'}}>
        <div class="col-md-8 p-2">
            <p class="abel-600" style={{fontSize: '2rem',color: '#213555'}} align="center">Together, we make a difference.</p>
            <p class="abel-600" style={{fontSize: '2rem',color: '#213555'}} align="center">Your feedback guides our actions towards excellence.</p>
        </div>
        <div class="col-md-4 myDiv">
            <img src={image} width="100%" style={{padding: '0px'}}></img>
        </div>
    </div>
    <div class="row mt-4 p-0 gx-2 mx-0" style={{alignItems: 'center'}}>
        <div class=" col-md-6 p-2 m-0">
            <div class="d-flex" style={{justifyContent: 'center'}}>
                <Link to="/courseFeedback" class="btn btn-dark c-btn" style={{fontSize: '1.2rem'}}>Course Feedback</Link>
            </div>
        </div>
        <div class=" col-md-6 p-2 m-0">
            <div class="d-flex" style={{justifyContent:'center'}}>
                <Link to="/infrastructureFeedback" class="btn btn-dark c-btn" style={{fontSize: '1.2rem'}}>Infrastructure Feedback</Link>
            </div>
        </div>
    </div>
        </>
    );
}

export {HomePage};