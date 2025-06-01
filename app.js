let express = require("express")
let app = express()  //let express = require("express")()

require("./database/connection")
/*
app.get("/",(req,res)=>{
    res.json({
        name:"Aruna",
        address: "Brt"
    })
   // res.send(" hlw world")
})

app.get("/about",function(req,res){
    res.json({
        name:"this is  about page"
})
});

app.post("/register",function(req,res){
    res.json({
        name:"this registerd success "
})
}); */

app.get("/books",function(req,res){
    res.json({
        meaasge:"Books fetched succussfully"
})
});

app.post("/books",function(req,res){
    res.json({
        meaasge:"Book added successfully"
})
});

app.delete("/books/:id",function(req,res){
    res.json({
        delete:"Books delete succussfully"
})
});

app.patch("/books/:id",function(req,res){
    res.json({
        meaasge:"Books updated succussfully"
})
});

/*stgresql://postgres:Mern2000@db.bkkkeslkzgaxtsvmgmji.supabase.co:5432/postgres //connection string  */

postgresql://postgres.bkkkeslkzgaxtsvmgmji:Mern2000@aws-0-ap-south-1.pooler.supabase.com:6543/postgres //[orm]if above link is not work then use this

app.listen(4000,function(){
console.log("server/backend/node project has started at port 4000")// allocate port no. of system// we can't allocate 0-1000 port no.
})
