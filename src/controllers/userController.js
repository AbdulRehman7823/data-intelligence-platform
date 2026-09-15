const userService = require("../services/userService");

async function createUser(req,res) {
    try{

        const {email, passwordHash} =  req.body;
        if(!email || !passwordHash){
            return res.status(400).json({error:"Email and password is required"})
        }
        
        const user  = await userService.createUser(email, passwordHash);

        return res.status(201).json(user);
    }catch{

        console.log(error);
        return res.status(500).json({error:"Internal server error"})
    }
    
}


module.exports = {createUser}