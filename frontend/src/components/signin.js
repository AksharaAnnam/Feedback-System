import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import './signup.css';
import {NavComponent} from './nav.js';
import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignIn=()=>{
    const {id} = useParams();
    const [invalid,setMsg]=useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    // const [courseValue, setCourseValue] = useState('');
    // const [sectionValue, setSectionValue] = useState('');
    const [email,setEmailValue]=useState('');
    const [name,setNameValue]=useState('');
    const [uid,setUidValue]=useState('');
    const [semester,setSemValue]=useState('');
    const [section,setSecValue]=useState('');
    // const [c1,setC1Value]=useState([]);
    // const [c2,setC2Value]=useState([]);
    // const [c3,setC3Value]=useState([]);
    // const [c4,setC4Value]=useState([]);
    // const [c5,setC5Value]=useState([]);
    // const [c6,setC6Value]=useState([]);
    // const [c7,setC7Value]=useState([]);
    // const [c8,setC8Value]=useState([]);
    // const [t1,setT1]=useState([])
    // const [t2,setT2]=useState([])
    // const [t3,setT3]=useState([])
    // const [t4,setT4]=useState([])

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         if(id==='faculty'){
    //             var response = await axios.get('http://localhost:9000/getCoursesbySem/1');
    //             setC1Value(response.data);
    //             response = await axios.get('http://localhost:9000/getCoursesbySem/2');
    //             setC2Value(response.data);
    //             response = await axios.get('http://localhost:9000/getCoursesbySem/3');
    //             setC3Value(response.data);
    //             response = await axios.get('http://localhost:9000/getCoursesbySem/4');
    //             setC4Value(response.data);
    //             response = await axios.get('http://localhost:9000/getCoursesbySem/5');
    //             setC5Value(response.data);
    //             response = await axios.get('http://localhost:9000/getCoursesbySem/6');
    //             setC6Value(response.data);
    //             response = await axios.get('http://localhost:9000/getCoursesbySem/7');
    //             setC7Value(response.data);
    //             response = await axios.get('http://localhost:9000/getCoursesbySem/8');
    //             setC8Value(response.data);
    //             console.log(response.data);
    //         }
    //     } catch (error) {
    //     console.error('Error fetching data:', error);
    //     }
    // };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(newPassword)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
        } else {
            setPasswordError('');
        }
    };

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        if (newConfirmPassword !== password) {
            setConfirmPasswordError('Your password and confirmation password must match.');
        } else {
            setConfirmPasswordError('');
        }
    };

    // const getCourseList = (table) => {
        
    // };

    // const fetchTeacherData = async (uid) => {
    //     try {
    //         const teaCourses=await axios.get('http://localhost:9000/getTeaCourse/'+uid);
    //         console.log(teaCourses);
    //     } catch (error) {
    //     console.error('Error fetching data:', error);
    //     }
    // };

    // const addCourse = () => {
    //     if(uid===''){
    //         alert('Enter ID before adding courses');
    //     }else{
    //         axios.post('http://localhost:9000/addTeaCourse',{id:Number(uid),cid:courseValue,section:Number(sectionValue)})
    //         .then(result=>{
    //             console.log(result.data);
    //         })
    //         .catch(err=>console.log(err));
    //         fetchTeacherData(uid);
    //     }
    // };


    // const deleteCou = (table,tabInd) => {
        
    // };

    const SignedIn=(e)=>{
        e.preventDefault();
        if (!passwordError && !confirmPasswordError) {
            axios.post('http://localhost:9000/check',{email})
        .then(result=>{
            console.log(result.data);
            if(result.data==="Registered!"){
                setMsg('Email already registered. Try with another one!');
            }else{
                if(id==='student'){
                    axios.post('http://localhost:9000/register',{id:Number(uid),name:name,email:email,role:'student',password:password}).then(result=>console.log(result)).catch(err=>console.log(err));
                    axios.post('http://localhost:9000/addStudent',{id:Number(uid),semester:Number(semester),section:Number(section)}).then(result=>console.log(result)).catch(err=>console.log(err));
                    window.location.href = '/login';
                }else if(id==='faculty'){
                    axios.post('http://localhost:9000/register',{id:Number(uid),name:name,email:email,role:'student',password:password}).then(result=>console.log(result)).catch(err=>console.log(err));
                    window.location.href = '/login';
                }
            }
        })
        .catch(err=>console.log(err));
        }
    }
    return(
        <>
        <NavComponent/>
        <div class="container-fluid row d-flex justify-content-center mx-0 px-0 my-5 ">
        <div class="col-10 col-md-6 mx-2 px-5 my-5 py-4 styleDiv">
            <form id="registerForm" method="post" onSubmit={SignedIn}>
                <h3 class="abel-600" style={{color:'#213555'}}>Registration</h3>
                <div class="eleDiv">
                    <i class="fa fa-thin fa-user" style={{fontSize: '1.9rem'}}></i>
                    <input class="px-3 abel-500" type="text" placeholder="Enter your name" style={{border: 'none',backgroundColor:'#F0F0F0',width:'100%',
                    outline: 'none'}} name="name" id="name" onChange={(event) => setNameValue(event.target.value)} required></input>
                </div>
                <div class="eleDiv">
                    <i class="fa-regular fa-envelope fa" style={{fontSize: '1.7rem'}}></i>
                    <input class="px-3 abel-500" type="email" placeholder="Enter your email" style={{border: 'none',backgroundColor:'#F0F0F0',width:'100%',
                    outline: 'none'}} name="email" id="email" onChange={(event) => setEmailValue(event.target.value)} required></input>
                </div>
                <div class="eleDiv">
                    <i class="fa-solid fa-id-card fa" style={{fontSize: '1.7rem'}}></i>
                    <input class="px-3 abel-500" type="text" placeholder="Enter your ID(excluding hyphen(-))" style={{border: 'none',backgroundColor:'#F0F0F0',width:'100%',
                    outline: 'none'}} name="rollno" id="rollno" onChange={(event) => setUidValue(event.target.value)} required></input>
                </div>
                {(id==='student') && 
                    <>
                    <div style={{marginTop: '2rem'}}>
                    <label class="abel-500" style={{fontSize: '1.2rem'}} >Semester</label>
                    <div><input type="radio" name="sem" value="1" onChange={(event) => setSemValue(event.target.value)} required></input><label class="abel-500" style={{fontSize: '1rem'}} >&nbsp;1</label></div>
                    <div><input type="radio" name="sem" value="2" onChange={(event) => setSemValue(event.target.value)}></input><label class="abel-500" style={{fontSize: '1rem'}}>&nbsp;2</label><br></br></div>
                    <div><input type="radio" name="sem" value="3" onChange={(event) => setSemValue(event.target.value)}></input><label class="abel-500" style={{fontSize: '1rem'}}>&nbsp;3</label><br></br></div>
                    <div><input type="radio" name="sem" value="4" onChange={(event) => setSemValue(event.target.value)}></input><label class="abel-500" style={{fontSize: '1rem'}}>&nbsp;4</label><br></br></div>
                    <div><input type="radio" name="sem" value="5" onChange={(event) => setSemValue(event.target.value)}></input><label class="abel-500" style={{fontSize: '1rem'}}>&nbsp;5</label><br></br></div>
                    <div><input type="radio" name="sem" value="6" onChange={(event) => setSemValue(event.target.value)}></input><label class="abel-500" style={{fontSize: '1rem'}}>&nbsp;6</label><br></br></div>
                    <div><input type="radio" name="sem" value="7" onChange={(event) => setSemValue(event.target.value)}></input><label class="abel-500" style={{fontSize: '1rem'}}>&nbsp;7</label><br></br></div>
                    <div><input type="radio" name="sem" value="8" onChange={(event) => setSemValue(event.target.value)}></input><label class="abel-500" style={{fontSize: '1rem'}}>&nbsp;8</label><br></br></div>
                </div>
                <div style={{marginTop: '2rem'}}>
                    <label class="abel-500" style={{fontSize: '1.2rem'}}>Section</label>
                    
                    <div><input type="radio" name="sec" value="1" onChange={(event) => setSecValue(event.target.value)} required></input><label class="abel-500" style={{fontSize: '1rem'}}>&nbsp;1</label></div>
                    <div><input type="radio" name="sec" value="2" onChange={(event) => setSecValue(event.target.value)}></input><label class="abel-500" style={{fontSize: '1rem'}}>&nbsp;2</label><br></br></div>
                    <div><input type="radio" name="sec" value="3" onChange={(event) => setSecValue(event.target.value)}></input><label class="abel-500" style={{fontSize: '1rem'}}>&nbsp;3</label><br></br></div>
                </div>
                    </>
                }
                {/* {(id==='faculty' && 
                    <>
                    <div style={{marginTop: '2rem'}} class="container-fluid">
                    <label class="abel-500" style={{fontSize: '1.2rem',fontWeight: '600'}}>Add Course details</label><br/>
                    <div class="container-fluid">
                        <table class="table abel-500 table-container" id="table1">
                            <thead>
                                <tr>
                                    <th>Course</th>
                                    <th>Section</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {list1.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.courseValue}</td>
                                        <td>{item.sectionValue}</td>
                                        <td><button class="btn btn-outline-dark py-0" onClick={() => deleteCou('table1', index)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div class="container-fluid">
                        <h4 class="abel-500 form-label" style={{fontSize: '1.1rem'}}>Course Year-1</h4>
                        <select class="form-select d-inline abel-500 mySelect" id="selcou1"  placeholder="Course" onChange={(event) => setCourseValue(event.target.value)}>
                            <option value="">Course</option>
                            {
                                c1.map((item, index) => (
                                    <>
                                    <option value={item.cid}>{item.name}</option>
                                    </>
                                ))
                            }
                            {
                                c2.map((item, index) => (
                                    <>
                                    <option value={item.cid}>{item.name}</option>
                                    </>
                                ))
                            }
                        </select>&nbsp;
                        <select class="form-select d-inline abel-500 mySelect" id="selsec1"  placeholder="Section" onChange={(event) => setSectionValue(event.target.value)}>
                            <option value="">Section</option>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                        </select>&nbsp;
                        <button onClick={()=>addCourse('table1')} class="btn btn-outline-dark">Add</button>
                    </div> 
                    <div class="mt-3 container-fluid">
                        <label class="abel-500 form-label" style={{fontSize: '1.1rem'}}>Course Year-2</label>
                        <table class="table abel-500" id="table2">
                            <tr>
                                <th>Course</th>
                                <th>Section</th>
                                <th></th>
                            </tr>
                        </table>
                        <select class="form-select d-inline abel-500 mySelect" id="selcou2">
                            <option value="">Course</option>
                            <option value="Computer Organization and Architecture">Computer Organization and Architecture</option>
                            <option value="Database Management Systems">Database Management Systems</option>
                            <option value="Probability and Statistics">Probability and Statistics</option>
                            <option value="Web Technologies">Web Technologies</option>
                            <option value="Formal Language and Automata Theory">Formal Language and Automata Theory</option>
                            <option value="Systems and Signal Processing">Systems and Signal Processing</option>
                            <option value="Database Systems Lab">Database Systems Lab</option>
                            <option value="Web Technologies Lab">Web Technologies Lab</option>
                        </select>&nbsp;
                        <select class="form-select d-inline abel-500 mySelect" id="selsec2">
                            <option value="">Section</option>
                            <option>Section-1</option>
                            <option>Section-2</option>
                            <option>Section-3</option>
                        </select>&nbsp;
                        <button onClick={()=>addCourse('table2')} class="btn btn-outline-dark">Add</button>
                    </div>
                    <div class="mt-3 container-fluid">
                        <label class="abel-500 form-label" style={{fontSize: '1.1rem'}}>Course Year-3</label>
                        <table class="table abel-500 table-container" id="table3">
                            <tr>
                                <th>Course</th>
                                <th>Section</th>
                                <th></th>
                            </tr>
                        </table>
                        <select class="form-select form-control d-inline abel-500 mySelect" id="selcou3">
                            <option value="">Course</option>
                            <option value="Computer Organization and Architecture">Computer Organization and Architecture</option>
                            <option value="Database Management Systems">Database Management Systems</option>
                            <option value="Probability and Statistics">Probability and Statistics</option>
                            <option value="Web Technologies">Web Technologies</option>
                            <option value="Formal Language and Automata Theory">Formal Language and Automata Theory</option>
                            <option value="Systems and Signal Processing">Systems and Signal Processing</option>
                            <option value="Database Systems Lab">Database Systems Lab</option>
                            <option value="Web Technologies Lab">Web Technologies Lab</option>
                        </select>
                        <select class="form-select d-inline abel-500 mySelect" id="selsec3">
                            <option value="">Section</option>
                            <option>Section-1</option>
                            <option>Section-2</option>
                            <option>Section-3</option>
                        </select>&nbsp;
                        <button onClick={()=>addCourse('table3')} class="btn btn-outline-dark">Add</button>
                    </div>
                    <div class="mt-3 container-fluid ">
                        <label class="abel-500 form-label" style={{fontSize: '1.1rem'}}>Course Year-4</label>
                        <table class="table abel-500 table-container" id="table4">
                            <tr>
                                <th>Course</th>
                                <th>Section</th>
                                <th></th>
                            </tr>
                        </table>
                        <select class="form-select d-inline abel-500 mySelect" id="selcou4">
                            <option value="">Course</option>
                            <option value="Computer Organization and Architecture">Computer Organization and Architecture</option>
                            <option value="Database Management Systems">Database Management Systems</option>
                            <option value="Probability and Statistics">Probability and Statistics</option>
                            <option value="Web Technologies">Web Technologies</option>
                            <option value="Formal Language and Automata Theory">Formal Language and Automata Theory</option>
                            <option value="Systems and Signal Processing">Systems and Signal Processing</option>
                            <option value="Database Systems Lab">Database Systems Lab</option>
                            <option value="Web Technologies Lab">Web Technologies Lab</option>
                        </select>&nbsp;
                        <select class="form-select d-inline abel-500 mySelect" id="selsec4">
                            <option value="">Section</option>
                            <option>Section-1</option>
                            <option>Section-2</option>
                            <option>Section-3</option>
                        </select>&nbsp;
                        <button onClick={()=>addCourse('table4')} class="btn btn-outline-dark">Add</button>
                    </div>
                </div>
                    </>
                )

                } */}
                <div style={{marginTop: '2rem',borderBottom: '1px solid #747264' }}>
                    <label class="abel-500" style={{fontSize: '1.2rem'}} for="pword">Set Password</label>
                    <input class="abel-500" type="password" placeholder="Set Password" style={{border: 'none',fontSize: '1.2rem',backgroundColor:'#F0F0F0',width:'100%',
                    outline: 'none'}} name="pword" id="pword" onChange={handlePasswordChange} required></input>
                </div>
                <p class="abel-500" style={{color:'#cc2424'}}>{passwordError}</p>
                <div style={{marginTop: '2rem',borderBottom: '1px solid #747264' }} >
                    <label class="abel-500" style={{fontSize: '1.2rem'}} for="cpword">Confirm Password</label>
                    <input class="abel-500" type="password" placeholder="Re-enter password" style={{border: 'none',fontSize: '1.2rem',backgroundColor:'#F0F0F0',width:'100%',
                    outline: 'none'}} name="cpword" id="cpword" onChange={handleConfirmPasswordChange} required></input>
                </div>
                <p class="abel-500" style={{color:'#cc2424'}}>{confirmPasswordError}</p>
                <p class="abel-600" style={{color:'#cc2424'}}>{invalid}</p>
                <button class="btn btn-dark mt-5" type="submit">Register</button>
                <p class="mt-4 abel-500" style={{fontSize: '1.2rem'}}>Already registered? <Link style={{color:'#265073'}} to="/login">Login now</Link></p>
            </form>
        </div>
    </div>
        </>
    );
}

export {SignIn};