const crypto=require('crypto');
function mockImplementation(){
    return crypto.randomBytes(20);
}
module.exports=mockImplementation;