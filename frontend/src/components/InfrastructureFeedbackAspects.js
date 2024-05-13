import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import {NavComponent} from './nav.js';
import React, { useState,useEffect} from 'react';
import { useAuth } from './AuthContext.js';
import axios from 'axios';

const InfraAspects=()=>{
    const { isLoggedIn,uname,role} = useAuth;
    // const isAdmin =isLoggedIn && uname && role === 'admin';
    const isAdmin=true;
    const [quests, setData] = useState([]);
    const [newLine, setNewLine] = useState('');

    const addRow = () => {
        if (newLine.trim() !== '') {
            axios.post('http://localhost:9000/addInfraAsp',{question:newLine})
            .then(result=>{
                console.log(result.data);
            })
            .catch(err=>console.log(err));
            fetchData();
            setNewLine('');
        } else {
        alert('Please enter valid content');
        }
    };

  const deleteRow = (index) => {
    axios.delete('http://localhost:9000/deleteInfraAsp/'+index).then(res=>console.log(res)).catch(err=>console.log(err))
    fetchData();
  };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const response = await axios.get('http://localhost:9000/getInfraAsp');
        setData(response.data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };
    return(
        <>
        <NavComponent/>
        {
            isAdmin ? (
                <div class="container-fluid">
                <h2 class="abel-600 m-1" style={{fontSize: '1.5rem',color: '#213555'}}>Infrastructure Feedback Aspects</h2>
                <div class="table-responsive">
                <table class="table abel-500" style={{fontSize: '1.2rem'}}>
                    <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="tb">
                        {
                            quests.map((quest,index)=>{
                                return <tr>
                                    <td>{quest.question}</td>
                                    <td><button class="btn btn-outline-dark py-0" onClick={() => deleteRow(quest._id)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table><br></br>
                </div>
                <div class="add-container container-fluid">
                    <input type="text" class="form-control d-inline-block abel-600" placeholder="Enter new aspect" onChange={(e) => setNewLine(e.target.value)}></input>
                    <button class="btn btn-dark abel-600 my-4" onClick={addRow}>ADD</button>
                </div>
                </div>
            ) : (
                <div class="row mt-3 p-0 mx-0">
                <div class="col px-3">
                    <h3 class="abel-600 m-1">Unauthorized Access!</h3>
                    <p class="abel-600 m-1" style={{fontSize: '1.2rem',color: '#213555'}}>You need to be logged in as an admin to access this page.</p>
                </div>
                </div>
            )
        }
        </>
    );
}

export {InfraAspects};