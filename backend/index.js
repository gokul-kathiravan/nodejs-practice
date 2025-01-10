const express=require("express");
const cors=require("cors");
const app=express();
const options={orgin:"*"}
app.use(cors(options))
app.use(express.json());
const data=("hello",123,{"key":"value"})
app.get("/",(req,res) => {
    res.send("helloworld")
})
let studentdata=[
    {
    Name:"gokul kathiravan",
    Age:19,
    Rollnumber:243901
    }
];
app.post('/',(req,res)=>{
    studentdata.push(HTMLTableRowElement.body);
    console.log(req.body);
    res.send("Done")
})
app.get('/student',(req,res)=>{
    res.send(studentdata);
})

app.listen(3333,()=>{
    console.log("started")
})

