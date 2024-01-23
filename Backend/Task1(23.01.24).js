import express from "express";
const app = express();

app.use(express.json());

const users = [];

app.post('/signup', (req, res) => {

  const { username, email, password } = req.body;

   const existUser = users.filter((u) => 
   u.email === email ||u.username === username);

  if (existUser.length >0) 
  {
    return res.status(200).send('Username and Email are already exit');
  }else{

  users.push({ username,email, password });
  res.send('User created successfully' );
  }

});


app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  const user = users.filter
  ((u) => u.email === email && u.password === password);


  if (user.length>0) 
  {
     res.status(200).send('Sign-in successful ');
  }else{
    res.json('Enter valid Email and Password' );
  }
});


app.get('/users', (req, res) => {
  res.send({ users });
});


app.listen(3000,()=>{
  console.log("Server is running on port 3000");
});
