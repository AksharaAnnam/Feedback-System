import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import {NavComponent} from './nav.js';
import React, { useState,useEffect} from 'react';
import { useAuth } from './AuthContext.js';
import axios from 'axios';

const Courses=()=>{
    const { isLoggedIn,uname,role} = useAuth;
    // const isAdmin =isLoggedIn && uname && role === 'admin';
    const isAdmin=true;
    const [courses, setData] = useState([]);
    const [newCid, setNewCid] = useState('');
    const [newCname, setNewCname] = useState('');
    const [newSem, setNewSem] = useState();

    const addRow = () => {
        if (!/^\d+$/.test(newSem)) {
            alert('Please input integer for semester');
          }else{
            axios.post('http://localhost:9000/addCourse',{cid:newCid,name:newCname,semester:Number(newSem)})
            .then(result=>{
                console.log(result.data);
            })
            .catch(err=>console.log(err));
            fetchData();
            setNewCid('');
            setNewCname('');
        }
    };

  const deleteRow = (index) => {
    axios.delete('http://localhost:9000/deleteCourse/'+index).then(res=>console.log(res)).catch(err=>console.log(err))
    fetchData();
  };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const response = await axios.get('http://localhost:9000/getCourses');
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
                <h2 class="abel-600 m-1" style={{fontSize: '1.5rem',color: '#213555'}}>Coursess</h2>
                <div class="table-responsive">
                <table class="table abel-500" style={{fontSize: '1.2rem'}}>
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Semester</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="tb">
                        {
                            courses.map((course,index)=>{
                                return <tr>
                                    <td>{course.cid}</td>
                                    <td>{course.name}</td>
                                    <td>{course.semester}</td>
                                    <td><button class="btn btn-outline-dark py-0" onClick={() => deleteRow(course._id)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table><br></br>
                </div>
                <div class="add-container container-fluid">
                    <form>
                            <input type="text" class="form-control d-inline-block abel-600" placeholder="Enter new course id" onChange={(e) => setNewCid(e.target.value)} required></input>
                            <input type="text" class="form-control d-inline-block abel-600 my-2" placeholder="Enter new course name" onChange={(e) => setNewCname(e.target.value)} required></input>
                            <input pattern="[0-9]*" type="number"  class="form-control d-inline-block abel-600 my-2" placeholder="Enter semester" onChange={(e) => setNewSem(e.target.value)} required></input>
                            <button class="btn btn-dark abel-600 my-4" onClick={addRow}>ADD</button>
                    </form>
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

export {Courses};