const express = require('express');
const app = express();

let dbh = {
    data: [
        {"ID":1,"Name":"Ahsan Riaz"},
        {"ID":2,"Name":"Afaq Shoaib"},
        {"ID":3,"Name":"Suleman Sohail"},
        {"ID":4,"Name":"Faateh Sultan Kazmi"},
        {"ID":5,"Name":"Bilal Javed"}
    ]
};

const getStudent = (ID)=>{
    const students = dbh.data;
    for(let i in students){
        if(students[i].ID==ID){
            return students[i];
        }
    }
    return "Record Not found";
}




app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/home', (req, res) => {
    res.send('Home');
});

app.get('/students',(req, res) => {
    // console.log(req.body.error);
    res.send(dbh.data);
});

app.get('/students/:id', (req, res) => {
    let id = req.params.id;
    res.send(getStudent(id));
});

app.put('/students', (req, res) => {
	dbh.data.push({"ID":dbh.data.length+1, "Name":"New Name"});
	res.send(dbh.data);
});


app.update('/students/:id', (req, res) => {
    let id = req.params.id;
    let index = dbh.data.indexOf(getStudent(id));
    if(index>=0) {
        dbh.data[index]["Name"] = "new name";
        r = dbh.data[index];
		res.send(r);
    }
    else{
        res.send("Record Does not Found");
    }
    
});

app.delete('/students/:id', (req, res) => {
    let id = req.params.id;
    let index = dbh.data.indexOf(getStudent(id));
    if(index>=0) {
        r = dbh.data.splice(index,1);
        res.send(r);
    }
    else{
        res.send("Record Does not Found");
    }
    
});





app.get('/contactUs', (req, res) => {
    res.send('Contact Us');
});

app.get('/login', (req, res) => {
    res.send('Login Page');
});



const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening to Port: ${port}`));