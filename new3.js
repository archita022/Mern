const http=require("http")
const PORT=2005
const server=http.createServer((req,res)=>{
    res.write("This is MERN")
    res.end()
})
server.listen((err)=>{
    if(!err) console.log(`This server is running in ${PORT}`)
})