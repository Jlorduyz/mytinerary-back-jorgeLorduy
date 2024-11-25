import User from '../Models/User.js'


export default async (req,res,next) =>{
    try {
        let account = await User.findOne({email: req.body.email})
        if (account){
            req.user ={
                photoURL: account.photoURL,
                email: account.email,
                password: account.password,

            }
            return next()
        }
        return res.status(400).json({
            success: false,
            message: "user does not exist",
        });
    }catch(e){
        next(e)
    }
}