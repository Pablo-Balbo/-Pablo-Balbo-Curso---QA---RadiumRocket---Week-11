const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const newUsers = [];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server initializated at port: ${port}`)
});

var handleRegister = function(req, res){
  console.log(req.body);
  const newUser = {
    name: req.body.fullName,
    email: req.body.email,
    password: req.body.password
  };
  if(!newUser.name || !newUser.email || !newUser.password){
    return res.status(400).json({ msg: 'Please, enter a name, an email and a password'});
  } else {
    newUsers.push(newUser);
    return res.json({result: 'Success!'});
  }
};

var handleLogin = function(req, res){
  console.log(req.body);
  const registeredUser = {
    email: req.body.email,
    password: req.body.password
  };
  for (let i = 0; i < newUsers.length; i++) {
    if(newUsers[i].email === registeredUser.email){
      if(newUsers[i].password === registeredUser.password){
        return res.json({result: 'Successfull!'});
      } else {
        return res.status(404).json({result: 'Password not match'});
      }
    }
  }
  return res.status(404).json({result: 'User not found'});
};

app.post('/register', handleRegister);

app.put('/login', handleLogin);