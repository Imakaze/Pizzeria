const { check} = require('express-validator');
 
const USERVALIDATOREQUIRE=[
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 5, max: 10 }),
    check('name').isLength({ min: 3, max: 10 }),
];
 
const USERVALIDATOLOGIN=[...USERVALIDATOREQUIRE].pop();
module.exports={
    USERVALIDATOREQUIRE,
    USERVALIDATOLOGIN
}
