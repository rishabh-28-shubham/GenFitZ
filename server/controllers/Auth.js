const User = require('../models/user')
const bcrypt = require('bcrypt')

const signupController = async (req , res) => {
    try {
        const {username , email , password} = req.body;
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password , saltRounds);

        const user = new User({
            username,
            email,
            password : hashedPassword
        })

        await user.save().then(() => {
            res.status(200).json({message:'Signup successfull'})
        } )


    } catch (error) {
        console.log(error);
        res.status(200).json({message:"User already exists"});

    }
}


const loginController = async (req , res) => {
    try {
        const user = await User.findOne({email : req.body.email});
        if(!user){
            res.status(200).json('Please Sign Up first');

        }
        const isPasswordCorrect = bcrypt.compareSync(req.body.password  , user.password);
        if(!isPasswordCorrect){
            res.status(200).json({message : 'Password is not correct'})
        }

        const {password , ...others} = user._doc;
        res.status(200).json({others});

    } catch (error) {
        res.status(200).json({message : 'Password is not correct'})
    }
}

module.exports = {signupController , loginController}