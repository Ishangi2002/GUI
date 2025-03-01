import {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup =(req, res) => {
    
//check exicting user
    const q = "SELECT * FROM user WHERE email =?";
    db.query(q,[req.body.email], (err,data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");

 //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt); 

        const q ="INSERT INTO user(name,email,password_hash) VALUES (?)";
        const values = [req.body.name,req.body.email,hash];

        db.query(q,[values],(err,data)=> {
            if(err) return res.json(err);
            return res.status(200).json("User has been created");
        });
    });
};

export const login = (req,res) => {
    //check user
    const q ="SELECT * FROM user WHERE email =?";

    db.query(q,[req.body.email],(err,data)=> {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

    //check password.
        console.log(data[0].password_hash);
        console.log(req.body.password);
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password_hash);
        if (!isPasswordCorrect) return res.status(400).json("Wrong email or password!")

        const token = jwt.sign({id:data[0].id} , "jwtkey");
       
        const { name, email,id } = data[0];

        res.cookie("access_token", token, {
            httponly:true
        }).status(200).json({name,email,token,id});
    });
        
};

export const logout = (req,res) => {

    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true})
        .status(200).json("User has been Logged out.")
        
};