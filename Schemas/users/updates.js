import joi from "joi-oid";

const schema = joi.object({
    username: joi.string(),
    address: joi.string(),
    phone: joi.number().messages({
        'number':'Only numerical values'
    })
})

export default schema