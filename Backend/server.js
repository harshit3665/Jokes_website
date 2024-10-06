import express from 'express';
const app=express();

app.get("/" ,(req,res)=>{
    res.send("server is ready for bat")
});

app.get('/api/jokes' ,(req,res)=>{

    const jokes=[
        {
            id:1,
            title:'a joke',
            content:"this is a joke"
        },
        {
            id:2,
            title:"yes deadpool now you dead",
              content:"this ia not a joke"
        },

        {
            id:3,
            title:"i am ironman",
            content:"tony is iron man"

        },

        {
            id:4,
            title:"bring me hulk",
            content:"for brack",
        },
        {
            id:5,
            title:"i am back",
            content:"in avenge deadmoss",
        }
    ]
    res.send(jokes);
})
const port= process.env.PORT || 4000;

app.listen(port,() => {
    console.log(`server at http://localhost:${port}`);
})