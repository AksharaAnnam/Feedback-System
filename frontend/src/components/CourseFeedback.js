import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import { Link } from 'react-router-dom';
import {NavComponent} from './nav.js';

function CourseFeedback(){
    return(
        <>
        <NavComponent/>
        <div class="row justify-content-center mx-0">
        <div class="col-md-8">
            <div class="table-container">
                <p class="abel-600" style={{fontSize: '2rem'}}>Course Feedback</p>
                <p class="abel-600" style={{fontSize: '1.2rem'}}>Please fill out the form to provide constructive feedback to your teacher. Tick the box that most accurately describes your experience.</p>
                <table class="table abel-500" style={{fontSize: '1.2rem'}}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Subject Name/Faculty Name</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Subject 1 / Faculty 1</td>
                            <td><button type="button" class="btn btn-dark" onClick={() => window.location.href='/subjectFeedback'}>Give Feedback</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Subject 2 / Faculty 2</td>
                            <td><button type="button" class="btn btn-dark" onClick="giveFeedback(event)">Give Feedback</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Subject 3 / Faculty 3</td>
                            <td><button type="button" class="btn btn-dark" onclick="giveFeedback(event)">Give Feedback</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Subject 4 / Faculty 4</td>
                            <td><button type="button" class="btn btn-dark" onclick="giveFeedback(event)">Give Feedback</button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Subject 5 / Faculty 5</td>
                            <td><button type="button" class="btn btn-dark" onclick="giveFeedback(event)">Give Feedback</button></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Subject 6 / Faculty 6</td>
                            <td><button type="button" class="btn btn-dark" onclick="giveFeedback(event)">Give Feedback</button></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Subject 7 / Faculty 7</td>
                            <td><button type="button" class="btn btn-dark" onclick="giveFeedback(event)">Give Feedback</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Subject 8 / Faculty 8</td>
                            <td><button type="button" class="btn btn-dark" onClick="giveFeedback(event)">Give Feedback</button></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Subject 9 / Faculty 9</td>
                            <td><button type="button" class="btn btn-dark" onClick="giveFeedback(event)">Give Feedback</button></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Subject 10 / Faculty 10</td>
                            <td><button type="button" class="btn btn-dark" onClick="giveFeedback(event)">Give Feedback</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        </>
    );
}

export {CourseFeedback};