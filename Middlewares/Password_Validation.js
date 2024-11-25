import bcryptjs from "bcryptjs";

export default async (req, res ,next) => {
    let passwordBody = req.body.password
    let passwordDB = req.user.password;
    let comparePassword = bcryptjs.compareSync(passwordBody, passwordDB);
    if(comparePassword){
        delete req.body.password
        return next()
    }
    return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
    });
}