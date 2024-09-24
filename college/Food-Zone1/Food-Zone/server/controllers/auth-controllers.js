const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("hello, this is my server");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).send({ message: "email already exists" });
    }
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({email});

    if(!userExist){
        return res.status(400).json({message: "Invalid Credentials"})
    }

    const user = await userExist.comparePass(password)
    // const user = await bcrypt.compare(password, userExist.password);

    if(user){
        res.status(200).json({
            msg: "login successful",
            token: await userExist.generateToken(),
            userId: userExist._id.toString(),
          });
    }else{
        res.status(401).json({msg:"Invalid email or password"})
    }

  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

const user = async (req, res)=>{
  try {
    const userData = req.user;  
    // console.log(userData) 
    return res.status(200).json({userData})
  } catch (error) {
    console.log(`error from the route ${error}`)
  }
}

module.exports = { home, register, login, user };
