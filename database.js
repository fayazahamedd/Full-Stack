const mongodb=require('mongodb');
const MongoCLient=new mongodb.MongoClient;

const mongoConnect = (callback) => {
    goClient.connect('mongodb+srv://fayazahamed:Thinkpad14@cluster0-fsch0.mongodb.net/test?retryWrites=true&w=majority'
    ).then(client  => {
        console.log('Connected');
        callback(client);
    }).catch(err => {
        console.log(err);
    });
};
    
module.exports=mongoConnect;