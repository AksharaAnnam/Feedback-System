import './App.css';
import {HomePage} from './home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CourseFeedback } from './CourseFeedback.js';
import { SubjectFeedback } from './SubjectWiseFeedback.js';
import { InfrastructureFeedback } from './InfrastructureFeedback.js';
import { About } from './About.js';
import { Profile } from './Profile.js';
import { Login } from './login.js';
import { SignUp } from './signup.js';
import { SignIn } from './signin.js';
import {Admin} from './Admin.js';
import { Courses } from './Courses.js';
import { InfraAspects } from './InfrastructureFeedbackAspects.js';
import { CourseAspects } from './CourseFeedbackAspects.js';
import {TeacherCourses} from './teacherCourses.js';
import { AuthProvider } from './AuthContext';
import { useState } from 'react';
import UserState from './UserState.js';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uname,setUname]=useState('');
  const [role,setRole]=useState('');

  const login = () =>{
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courseFeedback" element={<CourseFeedback />} />
          <Route path="/infrastructureFeedback" element={<InfrastructureFeedback />} />
          <Route path="/subjectFeedback" element={<SubjectFeedback />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin/:id" element={<SignIn />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/infrastructureFeedbackAspects" element={<InfraAspects />}/>
          <Route path="/courseFeedbackAspects" element={<CourseAspects />}/>
          <Route path="/teacherCourses" element={<TeacherCourses />}/>
          <Route path="/auth" element={<AuthProvider />}/>
        </Routes>
      </BrowserRouter>
    </UserState>
  );
}


export default App;
