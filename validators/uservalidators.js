const { check } = require('express-validator');

const USERVALIDATORREGISTER = [
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 5, max: 10 }),
    check('name').isLength({ min: 3, max: 10 }),
];

const USERVALIDATORLOGIN = [
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 5, max: 10 }),    
];

module.exports={
    USERVALIDATORLOGIN,
    USERVALIDATORREGISTER
}

