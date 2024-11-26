import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required(),
    lastname: joi.string().required(),
    password: joi.string().required().messages({
        'required': "the Password is required",
    }),
    email: joi.string().email().required().messages({
        'string.email':'invalid email format'
    }),
    country: joi.string().required(),
    photoURL: joi.string().required().required(),
    online : joi.boolean()


})

export default schema