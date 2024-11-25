import passport from 'passport'
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import User from '../Models/User.js'

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CLIENT_CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) =>{

            try {

            let user = await User.findOne({email: profile.emails[0].value})
            if(!user){
                user = new User({
                    name: profile.name.givenName,
                    lastname: profile.name.familyName,
                    email: profile.emails[0].value,
                    online: true,
                    password: profile.id,
                   photoURL: profile.photos[0].value,

                })
            await user.save()
            }
            return done(null, user)}catch (e){
                return done(e)
            }
        }
    )
)