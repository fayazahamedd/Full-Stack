let userdata = [];
// {
//     user: 'fayaz',
//     email: 'fayazahamedd2021@srishakthi.ac.in',
//     pass: 'fayaz12'
// }];

module.exports = class UserData{

    constructor(u,e,p){

        this.user = u;
        this.email = e;
        this.pass = p;
        
    }

    save(){

        userdata.push(this);
    }

    static fetchAll(){

        return userdata;
    }
}