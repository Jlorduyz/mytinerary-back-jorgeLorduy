import joi from "joi-oid";

const schema = joi.object({
    email: joi.string().email().messages({
        'string.email':'email format invalid'
    })
})

export default schema