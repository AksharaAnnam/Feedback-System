import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import { Link } from 'react-router-dom';
import {NavComponent} from './nav.js';
import React, { useState} from 'react';
import { useAuth } from './AuthContext.js';

const Admin=()=>{
    const { isLoggedIn,uname,role} = useAuth;
    // const isAdmin =isLoggedIn && uname && role === 'admin';
    const isAdmin=true;
    return(
        <>
        <NavComponent/>
        <div class="row mt-3 p-0 mx-0">
            
                {
                    isAdmin ? (
                        <div class="col-sm-4 px-3">
                        <div class="card p-2">
                        <Link class="abel-600 m-1" style={{fontSize: '1.2rem',color: '#213555'}} to="/courses">Courses </Link>
                        <Link class="abel-600 m-1" style={{fontSize: '1.2rem',color: '#213555'}} to="courseFeedbackAspects">Course Feedback Aspects </Link>
                        <Link class="abel-600 m-1" style={{fontSize: '1.2rem',color: '#213555'}} to="/infrastructureFeedbackAspects">Infrastructure Feedback Aspects </Link>
                        </div>
                        </div>
                    ) : (
                        <div class="col px-3">
                            <h3 class="abel-600 m-1">Unauthorized Access!</h3>
                            <p class="abel-600 m-1" style={{fontSize: '1.2rem',color: '#213555'}}>You need to be logged in as an admin to access this page.</p>
                        </div>
                    )
                }
                
            
        </div>
        </>
    );
}

export {Admin};