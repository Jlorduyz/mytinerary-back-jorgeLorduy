import User from '../../Models/User.js'

let AllUsers = async (req, res, next) => {
    try {
        let { name, country } = req.query;

        let query = {
            ...(name && { name: { $regex: name, $options: "i" } }),
            ...(country && { country: { $regex: country, $options: "i" } })
        };

    let users = await User.find(query)
        return res.status(200).json({
            response: users
        })
    }catch (e) {
        next(e)
    }
}

let UserEmail = async (req, res, next) => {
    try {

        let emailParam = req.params.x
        let user = await User.find({email : emailParam })
        return res.status(200).json({
            response: user
        })
    }catch (e) {
        next(e)
    }
}
let UserID = async (req, res, next) => {
    try {

        let userId = req.params.x
        let user = await User.findById(userId)
        return res.status(200).json({
            response: user
        })
    }catch (e) {
        next(e)
    }
}
let UserName = async (req, res, next) => {
    try {

        let usernameParam = req.params.x
        let user = await User.find({name : usernameParam })
        return res.status(200).json({
            response: user
        })
    }catch (e) {
        next(e)
    }
}
export {AllUsers, UserEmail, UserName,UserID}


