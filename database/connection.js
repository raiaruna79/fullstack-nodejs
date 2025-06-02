const{Sequelize,DataTypes} = require("sequelize")
//const bookModel = require("./models/book.model")

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

db.books = require("./models/book.model")(sequelize,DataTypes)
db.products = require("./models/product.model")(sequelize,DataTypes)


//migrate code
sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate vyo hai")
})

 module.exports = db