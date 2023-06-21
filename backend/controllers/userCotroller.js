
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { sendEmail } = require("./../utils/email")
const UserRegisteration = require("../models/UserRegisteration")

exports.registerUser = async (req, res) => {
    try {
        const {
            fName,lName,email,sub,text } = req.body

        if (!fName||!lName|| !email|| !sub|| !text
            
        ) {
            throw new Error("All Fileds Required ")
        }

        const found = await UserRegisteration.findOne({ email })
        console.log(req.body);
        console.log(email);
        if (found) {
            throw new Error("Email Allready Exits")
        }

        
    

        const result = await UserRegisteration.create({
            ...req.body,
          
        })
        console.log(result);
        const token = jwt.sign({ id: result._id }, process.env.JWT_KEY)
        sendEmail({
            sendTo: email,
            sub: "Thanks For suggition",
            msg: `Thanks`
        })
        res.json({
            success: true,
            message: "user register successfuly",
            result: {
                result,
                token
            }

        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "error" + error,

        })

    }
}

