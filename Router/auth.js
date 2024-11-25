import {Router} from 'express';
import signIn from "../Controllers/Auth/signIn.js";
import PasswordValidation from "../Middlewares/Password_Validation.js";
import AccountNotExist from "../Middlewares/AccountNotExist.js";
import GenerateToken from "../Middlewares/GenerateToken.js";
import PassportGoogle from "../Middlewares/PassportGoogle.js";

const router = Router();

router.post("/signIn",AccountNotExist,PasswordValidation,GenerateToken, signIn);
//ruta para iniciar sesion con google
router.get('/signIn/google', PassportGoogle.authenticate('google',{session:false, scope:['profile','email']}));
router.get('/signIn/google/callback', PassportGoogle.authenticate('google', {session:false, failureRedirect:'/login'}),GenerateToken,signIn);


export default router

