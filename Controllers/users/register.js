import User from '../../Models/User.js'

let UserRegister = async (req, res, next) => {
    try {
        let user = req.body
        user.online = false
        let register = await User.create(user)
        return res.status(201).json({
            success: true,
            response: register
        })
    }catch (e) {
        next(e)
    }
}

export default UserRegister