const{Sequelize, DataTypes} = require("sequelize")
const sequelize = new Sequelize("postgresql://postgres.bkkkeslkzgaxtsvmgmji:Mern2000@aws-0-ap-south-1.pooler.supabase.com:6543/postgres ")

sequelize.authenticate()
.then(()=>{
    console.log("Authenticate vyo and connected")
})
.catch((err)=>{
    console.log("Error aayo" +err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
 module.exports = db