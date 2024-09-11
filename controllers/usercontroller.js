const users = require('../users.json')// connect the users data.............
function getAllUsers(req, res) {//2 and 11 line are same getAllusers
    try {
        res.json(users)
    } catch (err) {
        console.log(err)
    }
}
function getUser(req,res)
{
    try{
        let id=parseInt(req.params.id);
        let user=users.find((user)=>user.id===id);
        res.json(user)
    }catch(err)
    {
        console.log(err)
    }
}
module.exports = {
    getAllUsers ,//2 and 11 line are same getAllusers
    getUser  
}