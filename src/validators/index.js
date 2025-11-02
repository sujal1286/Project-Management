import { body } from "express-validator";

const userRegistrationValidator = () => {
    return [
        body('email')
            .trim()
            .notEmpty().withMessage('Email is required')
            .isEmail().withMessage('Invalid email format'),
        body('username')
            .trim()
            .notEmpty().withMessage('Username is required')
            .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long')
            .isLength({ max: 20 }).withMessage('Username must be at most 20 characters long'),
        body('password')
            .notEmpty().withMessage('Password is required')
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')

    ]
}



const userLoginValidator = () => {
    return [
        body('email')
            .trim()
            .isEmail().withMessage('Invalid email format')
            .notEmpty().withMessage('Email is required'),
        body('password')
            .notEmpty().withMessage('Password is required')
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ]
}


export { userRegistrationValidator, userLoginValidator };