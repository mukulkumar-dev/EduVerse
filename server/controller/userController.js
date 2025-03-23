const user= require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//signup controller
exports.signupUser= async(req, res) =>{
    try{
    const{username, email, password} = req.body;

    if(!username || !email || !password){
        return res
        .status(400)
        .json({success : false, error :"All fields are required"});
    }

    //does the user already exist
    const existingUser = await user.findOne({ $or: [{username}, {email}]});
    if(existingUser){
        return res
        .status(400)
        .json({success:false, error:"username or email already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    //new user
    const newUser = new user({username, email, password : hashedPassword});
    await newUser.save();
    return res.status(200).json({success:true, message: "Account Created"});

    }catch(error){
        return res
        .status(400)
        .json({success:false, error:"Internal Server Error"});
    }
};

//Login Controller
exports.loginUser= async(req, res) =>{
    try{
    const{email, password} = req.body;

    if(!email || !password){
        return res
        .status(400)
        .json({success : false, error :"All fields are required"});
    }

    //does the username or email already exist
    const existingUser = await user.findOne({email});
    if(!existingUser){
        return res
        .status(400)
        .json({success:false, error:"Invalid Credentials"});
    }
    const checkPassword= await bcrypt.compare(password, existingUser.password);
    if(!checkPassword){
        return res
        .status(400)
        .json({success:false, error : "Invalid Credentials"});
    }

    const token = jwt.sign({
        id:existingUser._id,
        email: existingUser.email,
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "30d",  //Token expires in 30 days
    });

    res.cookie("blogAppCookie", token, {
    httpOnly: true,  
    maxAge: 30 * 24 * 60 * 60 * 1000, 
    secure: process.env.NODE_ENV === "production", // true in production (HTTPS), false in dev
    sameSite: "None", // Needed for cross-origin requests
});


    return res.status(200).json({success:true, message: "Login Successfully "});

    }catch(error){
        return res
        .status(400)
        .json({success:false, error:"Internal Server Error"});
    }
};

//check-cookie
exports.checkCookie = (req, res) =>{
    try{
        const token = req.cookies.blogAppCookie;
        console.log("Received Cookie:", token);
        if(token){
            return res.status(200).json({message : true});
        }
        return res.status(200).json({message : false});
    }catch(error){
        return res.status(500).json({error : "Internal Server Error"});
    }
};

// Logout Controller
exports.logoutUser = async (req, res) => {
    try {
        res.clearCookie("blogAppCookie", {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        });

        return res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};