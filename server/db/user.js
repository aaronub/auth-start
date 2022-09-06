const Sequelize = require('sequelize');
const { STRING } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/kermit_db');
const User = conn.define('user', {
    username: STRING,
    password: STRING
})

User.prototype.generateToken = function(){
    return {token: this.id}
}

//grabs user by their token
User.byToken = async(token)=>{
    try{
       const user = await User.findByPk(token);
       if(user){
           return user;
       }
       const error = Error("bad credentials");
       error.status =401;
       throw error;
    }catch{
        const error = Error("bad credentials");
        error.status =401;
        throw error;
    }
}

User.authenticate = async({username, password})=>{
    const user = await User.findOne({
        where:{
            username,
            password
        }
    })

    if(user){
        return user.id;
    }

    const error = Error("bad credentials");
    error.status =401;
    throw error;

}

module.exports = {
    User
}