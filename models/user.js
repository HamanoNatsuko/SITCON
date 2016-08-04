var mysql = require('mysql');
var DB_NAME = 'demo_nodejs';

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'nodejs',
    password : 'nodejs'
});
function User(user){
    this.username = user.username;
    this.userpass = user.userpass;
};
User.prototype.save = function save(callback) {
        var user = {
            username: this.username,
            userpass: this.userpass
        };

        var cmd = "INSERT INTO userinfo(id, username, userpass) VALUES(0,?,?)";

        connection.query(cmd, [user.username, user.userpass], function (err,result) {
            if (err) {
                return;
            }

            connection.release();
            callback(err,result);                     
        });       
    };