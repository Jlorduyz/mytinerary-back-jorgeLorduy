import User from '../../Models/User.js'

export default async (req, res,next) => {
    try {
        await User.findOneAndUpdate({email: req.user.email},
            {online:true })
        return res.status(200).json({
            success: true,
            message: 'successful login',
            user:{
                email: req.user.email,
                name: req.user.username,
                photoURL: req.user.photoURL
            },
            token: req.token

        })
    }catch(e){
        next(e)
    }
}