import User from "../Models/User.js";

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email });
        if (account) {
            return res.status(400).json({
                success: false,
                messages:"email already assigned to a user",
            });
        }
        return next();
    } catch (error) {
        next(error);
    }
};