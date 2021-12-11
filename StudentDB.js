const DBHandler = {
    data: [
        {"ID":1,"Name":"Ahsan Riaz"},
        {"ID":2,"Name":"Afaq Shoaib"},
        {"ID":3,"Name":"Suleman Sohail"},
        {"ID":4,"Name":"Faateh Sultan Kazmi"},
        {"ID":5,"Name":"Bilal Javed"}
    ],
    
    getStudent = (id)=>{
        for(let i in this.data)
        {
            if(this.data[i].ID==id) {
                return this.data[id];
            }
        }
        return -1;
    },
    
    getAllStudent = ()=>{
        return this.data;
    }    
}; 

module.exports = DBHandler;