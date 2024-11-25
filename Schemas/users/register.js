import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required(),
    lastname: joi.string().required(),
    password: joi.string().alphanum().required().messages({
        'string.alphanum':'Only alphanumeric values'
    }),
    email: joi.string().email().required().messages({
        'string.email':'invalid email format'
    }),
    country: joi.string().required(),
    photoURL: joi.string().required().required()

})

export default schema