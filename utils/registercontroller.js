
const fs = require('fs');
const path = require('path');
const CONTROLLERPATH = 'controlador'
module.exports = function(app,dirname){
    const files = fs.readdirSync(path.join(dirname,CONTROLLERPATH));
    files.forEach(file=>{
       const controller= require(`../${CONTROLLERPATH}/${file}`);
       controller(app);
    });
}
