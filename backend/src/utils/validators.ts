import { error } from "console";
import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
    return async (request:Request, response: Response, next: NextFunction) => {
        for (let validation of validations){
            const result = await validation.run(request);
            if (!result.isEmpty()){break;}
        }
        const errors = validationResult(request);
        if (errors.isEmpty()){return next();}

        return response.status(422).json({errors: errors.array()});
    };
};

export const signupValidator = [
    body('name').notEmpty().withMessage("Name is a required field."),
    body('email').trim().isEmail().withMessage("Email is a required field."),
    body('password').trim().isLength({min:6}).withMessage("Password should contain atleast 6 characters.")
]