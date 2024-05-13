const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const CredentialModel=require("./models/Credentials.js")
const CoursesModel=require("./models/Courses.js")
const InfraAspectsModel=require("./models/InfraAspects.js")
const CourseAspectsModel=require("./models/CourseAspects.js")
const TeacherModel=require("./models/Teacher.js")
const StudentModel=require("./models/Student.js")

const app=express();
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://annamakshara:Mvh8upNFoiRih5Tu@mycluster.leyeovk.mongodb.net/");

//Check registered

app.post('/check',(req,res)=>{
  const {email}=req.body;
  CredentialModel.findOne({email:email}).then(user=>{
      if(user){
          res.json("Registered!")
      }else{
          res.json("Not registered!")
      }
  }
  )
})

//Credentials APIs

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    CredentialModel.findOne({email:email}).then(user=>{
        console.log(email)
        if(user){
            if(user.password===password){
                if(user.role==='admin'){
                    res.json("Admin")
                }else{
                    res.json("Success")
                }
            }else{
                res.json("Incorrect Password!")
            }
        }else{
            res.json("Email not registered!")
        }
    }
    )
})

app.post('/register',(req,res)=>{
    CredentialModel.create(req.body).then(credentials=>res.json(credentials)).catch(err=>res.json(err));
})

// Course APIs

app.post('/addCourse',(req,res)=>{
    CoursesModel.create(req.body).then(course=>res.json(course)).catch(err=>res.json(err));
})

app.get('/getCourses', async (req, res) => {
    try {
      const data = await CoursesModel.find();
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.delete('/deleteCourse/:id',(req,res)=>{
    const id=req.params.id;
    CoursesModel.findByIdAndDelete({_id:id}).then(response=>res.json(response)).catch(err=>res.json(err))
})

app.get('/getCoursesbySem/:id', async (req, res) => {
    try {
        const sem=Number(req.params.id);
      const data = await CoursesModel.find({ semester: sem});
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Infra Aspects APIs

app.post('/addInfraAsp',(req,res)=>{
    InfraAspectsModel.create(req.body).then(asp=>{res.json(asp)
    }).catch(err=>res.json(err));
})

app.get('/getInfraAsp', async (req, res) => {
    try {
      const data = await InfraAspectsModel.find().catch(err=>console.log(err));
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.delete('/deleteInfraAsp/:id',(req,res)=>{
    const id=req.params.id;
    InfraAspectsModel.findByIdAndDelete({_id:id}).then(response=>res.json(response)).catch(err=>res.json(err))
})

//Course Aspects APIs

app.post('/addCourseAsp',(req,res)=>{
    CourseAspectsModel.create(req.body).then(asp=>{res.json(asp)
    }).catch(err=>res.json(err));
})

app.get('/getCourseAsp', async (req, res) => {
    try {
      const data = await CourseAspectsModel.find().catch(err=>console.log(err));
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.delete('/deleteCourseAsp/:id',(req,res)=>{
    const id=req.params.id;
    CourseAspectsModel.findByIdAndDelete({_id:id}).then(response=>res.json(response)).catch(err=>res.json(err))
})

// Teacher APIs

app.post('/addTeaCourse',(req,res)=>{
    TeacherModel.create(req.body).then(asp=>{res.json(asp);
        // console.log(asp);
    }).catch(err=>{res.json(err);
        // console.log(err);
    });
})

app.get('/getTeaCourse/:id',async(req,res)=>{
    try {
        const uid=Number(req.params.id);
        const data = await TeacherModel.find({id:uid}).catch(err=>console.log(err));
        res.json(data);
      } catch (error) {
        res.json(error);
      }
})

//Student APIs

app.post('/addStudent',(req,res)=>{
  StudentModel.create(req.body).then(asp=>{res.json(asp)
  }).catch(err=>res.json(err));
})

app.listen(9000,()=>{
    console.log('Server is running');
})
