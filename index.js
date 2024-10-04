import express from 'express';

const app = express();

app.get('/',(request, response)=>{
    response.send('Hello Siddhartha!');
});

app.get('/about-us',(request, response)=>{
    response.send('This the about is page');
})

const port = 3000 || process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
