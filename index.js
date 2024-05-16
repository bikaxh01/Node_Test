import express from 'express'

const port = 3000
const app = express()

app.get('/',(req,res)=>{
    res.json("Server is running")
})


app.listen(port,(()=>console.log(`Running at ${port}`)))