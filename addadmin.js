const admin = require('./admin.json');
const UserService =  require('./application/userservice');

const userservice = new UserService();
userservice.register(admin);
