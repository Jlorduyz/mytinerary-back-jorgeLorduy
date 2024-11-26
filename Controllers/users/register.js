import User from '../../Models/User.js'

let UserRegister = async (req, res, next) => {
    try {
        let user = req.body
        user.online = false
        let createdUser = await User.create(user)
        req.user = createdUser;
        next()
    }catch (e) {
        next(e)
    }
}

export default UserRegister