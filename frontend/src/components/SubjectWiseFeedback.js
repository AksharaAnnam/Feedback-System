import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import { Link } from 'react-router-dom';
import {NavComponent} from './nav.js';
import image from '../F2.PNG';
import React, { useState, useEffect } from 'react';

const SubjectFeedback=()=>{
    const [rating, setRating] = useState(0);
    const submitForm = (e) => {
        e.preventDefault();
        window.location.href = '/courseFeedback';
    };
    useEffect(() => {
        const starIcons = document.querySelectorAll(".staricon input[type='radio']");

        starIcons.forEach((starIcon) => {
            starIcon.addEventListener("change", () => {
                const ratingValue = parseInt(starIcon.value, 10); // Parse rating value to integer
                setRating(ratingValue); // Update rating state

                const labels = starIcon.parentNode.querySelectorAll("label");

                labels.forEach((label, index) => {
                    label.style.color = index < ratingValue ? "rgb(212,175,55)" : "black";
                });
            });
        });
        return () => {
            starIcons.forEach((starIcon) => {
                starIcon.removeEventListener("change", () => {});
            });
        };
    }, []);
    return(
        <>
        <NavComponent/>
        <div class="row mt-3 p-0 mx-0">
            <div class="col-sm-4 px-3">
                <div class="card p-2">
                    <p class="abel-600 m-1" style={{fontSize: '1.2rem',color: '#213555'}}>Course Name: </p>
                    <p class="abel-600 m-1" style={{fontSize: '1.2rem',color: '#213555'}}>Course Code: </p>
                    <p class="abel-600 m-1" style={{fontSize: '1.2rem',color: '#213555'}}>Faculty: </p>
                </div>
            </div>
        </div>
        <div class="row mt-4 p-0 gx-2 mx-0" style={{alignItems: 'center'}}>
            <div class="col p-4">
                <form onSubmit={submitForm}>
                <table class="table table-light table-hover table-bordered abel-500" style={{fontSize: '1.1rem'}}>
                    <tr class="abel-600" style={{fontSize: '1.2rem'}}>
                        <th>S.No</th>
                        <th>Aspect</th>
                        <th>Rating</th>
                    </tr>
                    <tr>
                        <td>1</td>   
                        <td>Established positive classroom environment</td>
                        <td>
                            <div class="staricon">
                                <input type="radio" name="rate" id="ratea" value="1" style={{ display: 'none'}}></input>
                                <label for="ratea" style={{paddingRight:'0.5rem',fontSize:'1.5rem'}}>&#9733;</label>
                                <input type="radio" name="rate" id="rateb" value="2" style={{ display: 'none' }}></input>
                                <label for="rateb" style={{paddingRight:'0.5rem',fontSize:'1.5rem'}}>&#9733;</label>
                                <input type="radio" name="rate" id="ratec" value="3" style={{ display: 'none' }}></input>
                                <label for="ratec" style={{paddingRight:'0.5rem',fontSize:'1.5rem'}}>&#9733;</label>
                                <input type="radio" name="rate" id="rated" value="4" style={{ display: 'none' }}></input>
                                <label for="rated" style={{paddingRight:'0.5rem',fontSize:'1.5rem'}}>&#9733;</label>
                                <input type="radio" name="rate" id="ratee" value="5" style={{ display: 'none' }}></input>
                                <label for="ratee" style={{paddingRight:'0.5rem',fontSize:'1.5rem'}}>&#9733;</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ability to cover the syllabus on time</td>
                        <td>
                            <div class="staricon">
                                <input type="radio" name="rate1" id="rate1a" value="1"></input>
                                <label for="rate1a">&#9733</label>
                                <input type="radio" name="rate1" id="rate1b" value="2"></input>
                                <label for="rate1b">&#9733</label>
                                <input type="radio" name="rate1" id="rate1c" value="3"></input>
                                <label for="rate1c">&#9733</label>
                                <input type="radio" name="rate1" id="rate1d" value="4"></input>
                                <label for="rate1d">&#9733</label>
                                <input type="radio" name="rate1" id="rate1e" value="5"></input>
                                <label for="rate1e">&#9733</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Skills of teaching accurately</td>
                        <td><div class="staricon">
                            <input type="radio" name="rate2" id="rate2a" value="1"></input>
                            <label for="rate2a">&#9733</label>
                            <input type="radio" name="rate2" id="rate2b" value="2"></input>
                            <label for="rate2b">&#9733</label>
                            <input type="radio" name="rate2" id="rate2c" value="3"></input>
                            <label for="rate2c">&#9733</label>
                            <input type="radio" name="rate2" id="rate2d" value="4"></input>
                            <label for="rate2d">&#9733</label>
                            <input type="radio" name="rate2" id="rate2e" value="5"></input>
                            <label for="rate2e">&#9733</label>
                        </div></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Helping students to work on practical exercise</td>
                        <td><div class="staricon">
                            <input type="radio" name="rate3" id="rate3a" value="1"></input>
                            <label for="rate3a">&#9733</label>
                            <input type="radio" name="rate3" id="rate3b" value="2"></input>
                            <label for="rate3b">&#9733</label>
                            <input type="radio" name="rate3" id="rate3c" value="3"></input>
                            <label for="rate3c">&#9733</label>
                            <input type="radio" name="rate3" id="rate3d" value="4"></input>
                            <label for="rate3d">&#9733</label>
                            <input type="radio" name="rate3" id="rate3e" value="5"></input>
                            <label for="rate3e">&#9733</label>
                        </div></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Communication and interacting with class</td>
                        <td><div class="staricon">
                            <input type="radio" name="rate4" id="rate4a" value="1"></input>
                            <label for="rate4a">&#9733</label>
                            <input type="radio" name="rate4" id="rate4b" value="2"></input>
                            <label for="rate4b">&#9733</label>
                            <input type="radio" name="rate4" id="rate4c" value="3"></input>
                            <label for="rate4c">&#9733</label>
                            <input type="radio" name="rate4" id="rate4d" value="4"></input>
                            <label for="rate4d">&#9733</label>
                            <input type="radio" name="rate4" id="rate4e" value="5"></input>
                            <label for="rate4e">&#9733</label>
                        </div></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Ability in controlling the class </td>
                        <td>
                            <div class="staricon">
                            <input type="radio" name="rate5" id="rate5a" value="1"></input>
                            <label for="rate5a">&#9733</label>
                            <input type="radio" name="rate5" id="rate5b" value="2"></input>
                            <label for="rate5b">&#9733</label>
                            <input type="radio" name="rate5" id="rate5c" value="3"></input>
                            <label for="rate5c">&#9733</label>
                            <input type="radio" name="rate5" id="rate5d" value="4"></input>
                            <label for="rate5d">&#9733</label>
                            <input type="radio" name="rate5" id="rate5e" value="5"></input>
                            <label for="rate5e">&#9733</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Encouraging students in extra curricular </td>
                        <td>
                            <div class="staricon">
                            <input type="radio" name="rate6" id="rate6a" value="1"></input>
                            <label for="rate6a">&#9733</label>
                            <input type="radio" name="rate6" id="rate6b" value="2"></input>
                            <label for="rate6b">&#9733</label>
                            <input type="radio" name="rate6" id="rate6c" value="3"></input>
                            <label for="rate6c">&#9733</label>
                            <input type="radio" name="rate6" id="rate6d" value="4"></input>
                            <label for="rate6d">&#9733</label>
                            <input type="radio" name="rate6" id="rate6e" value="5"></input>
                            <label for="rate6e">&#9733</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Effectiveness of the teaching methods </td>
                        <td>
                            <div class="staricon">
                            <input type="radio" name="rate7" id="rate7a" value="1"></input>
                            <label for="rate7a">&#9733</label>
                            <input type="radio" name="rate7" id="rate7b" value="2"></input>
                            <label for="rate7b">&#9733</label>
                            <input type="radio" name="rate7" id="rate7c" value="3"></input>
                            <label for="rate7c">&#9733</label>
                            <input type="radio" name="rate7" id="rate7d" value="4"></input>
                            <label for="rate7d">&#9733</label>
                            <input type="radio" name="rate7" id="rate7e" value="5"></input>
                            <label for="rate7e">&#9733</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Respect and empathy towards students </td>
                        <td>
                            <div class="staricon">
                            <input type="radio" name="rate8" id="rate8a" value="1"></input>
                            <label for="rate8a">&#9733</label>
                            <input type="radio" name="rate8" id="rate8b" value="2"></input>
                            <label for="rate8b">&#9733</label>
                            <input type="radio" name="rate8" id="rate8c" value="3"></input>
                            <label for="rate8c">&#9733</label>
                            <input type="radio" name="rate8" id="rate8d" value="4"></input>
                            <label for="rate8d">&#9733</label>
                            <input type="radio" name="rate8" id="rate8e" value="5"></input>
                            <label for="rate8e">&#9733</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Adaptability and Flexibility</td>
                        <td>
                            <div class="staricon">
                            <input type="radio" name="rate9" id="rate9a" value="1"></input>
                            <label for="rate9a">&#9733</label>
                            <input type="radio" name="rate9" id="rate9b" value="2"></input>
                            <label for="rate9b">&#9733</label>
                            <input type="radio" name="rate9" id="rate9c" value="3"></input>
                            <label for="rate9c">&#9733</label>
                            <input type="radio" name="rate9" id="rate9d" value="4"></input>
                            <label for="rate9d">&#9733</label>
                            <input type="radio" name="rate9" id="rate9e" value="5"></input>
                            <label for="rate9e">&#9733</label>
                            </div>
                        </td>
                    </tr>
                </table>
                <button onclick="submitForm(event)" class="btn btn-dark btn-lg">Submit</button>
                </form>
            </div>
        </div>
        </>
    );
}

export {SubjectFeedback};