const Sequelize = require('sequelize');
const {User} = require("./user");
const { STRING } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/kermit_db');

const syncAndSeed = async()=> {
    await conn.sync({ force: true });
    const users =[
        {username: "fozzie", password:"wakka_wakka"},
        {username:"gonzo", password: "camila"}
    ]

    const [fozzie, gonzo]= await Promise.all(
        users.map(cred =>User.create(cred))
    )
}

module.exports = {
    syncAndSeed
};
