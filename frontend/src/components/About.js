import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import './about.css';
import {NavComponent} from './nav.js';

const About=()=>{
    return(
        <>
        <NavComponent/>
        <div class="aboutContentDiv">
            <h3 class="abel-600" style={{color:' #213555'}}>Department of Computer Science and Engineering</h3>
            <p class="abel-500 pTag">Department of CSE has started its UG program BE(CSE) in the year 1985 with an intake of 20. At present the department has expanded to 300 students with 3 UG programs BE(CSE), BE CSE ( AI& ML) ,BE CSE ( IoT & CS including BC Technology), AI&ML . M. Tech.CSE was started in the year 2002 with an intake of 18 and increased to 36 in 2011. The intellectual ambiance in CSE Department is conducive to the holistic development of the students with well-equipped labs.</p>
            <h4 class="abel-600 ps-2" style={{color:' #213555'}}>Department Vision</h4>
            <p class="ps-2 abel-500 pSmall">To be in the frontiers of Computer Science and Engineering with academic excellence and Research.</p>
            <h4 class="abel-600 ps-2" style={{color:' #213555'}}>Department Mission</h4>
            <p class="ps-2 abel-500 pSmall">The mission of the Computer Science and Engineering Department is to:
                <ol>
                    <li class="abel-500 pSmall">Educate students with the best practices of Computer Science by integrating the latest research into the curriculum</li>
                    <li class="abel-500 pSmall">Develop professionals with sound knowledge in theory and practice of Computer Science and Engineering</li>
                    <li class="abel-500 pSmall">Facilitate the development of academia-industry collaboration and societal outreach programs</li>
                    <li class="abel-500 pSmall">Prepare students for full and ethical participation in a diverse society and encourage lifelong learning</li>
                </ol>
            </p>
            <h3 class="abel-600" style={{color:' #213555'}}>Importance of Feedback</h3>
            <p class="abel-500 pTag">Feedback provides valuable insights into the experiences and perspectives of stakeholders, enabling the department to identify areas for improvement in curriculum, teaching methods, facilities, and services. Feedback helps the department stay informed about emerging trends, challenges, and issues affecting stakeholders. By monitoring feedback trends, the department can proactively address issues and adapt to changing needs and expectations.  It fosters a culture of open communication, trust, and collaboration, which is essential for long-term success and sustainability.</p>
        </div>
        </>
    );
}

export {About};