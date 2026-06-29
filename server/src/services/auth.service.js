const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const ApiError =require("../utils/ApiError");

const registerUser = async ({ name, email, password }) => {
    const existingUser = await User.findOne({email});
    //if user exists
    if(existingUser){
        throw new ApiError(409,"Email already registered");
    }
    //if not exists hash password
    const hashedPassword = await bcrypt.hash(password,10);
    //create user
    const user = await User.create({
        name,
        email,
        password:hashedPassword,
    });

    //generate JWT
    const token = generateToken(user._id);
    return{
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
        }
    }
};

const loginUser = async ({ email, password }) => {
     const user = await User.findOne({email});
   
    if(!user){
        throw new ApiError(401,"Invalid Email or Password");
    }
    
    const isMatch = await bcrypt.compare(password,user.password);
     if(!isMatch){
        throw new ApiError(401,"Invalid Email or Password");
    }
  
    //generate JWT
    const token = generateToken(user._id);
    return{
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
        },
    };
};

module.exports = {
  registerUser,
  loginUser,
};