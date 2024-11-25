import User from "../../Models/User.js";

let DeleteUser = async (req, res, next) => {
    try {
        let user = await User.findOneAndDelete({
            email: req.body.email
        });
        return res.status(200).json({
            success: true,
            response: user
        })
    }catch (e) {
        next(e);
    }
}

export default DeleteUser