import Firebird from "node-firebird";

const dbOptions = {
    host : '127.0.0.1',
    port : 3050,
    database : 'c:\\JSPROJECTS\\JAVA\\aula161.FDB',
    user : 'SYSDBA',
    password : 'masterkey',
    lowercase_keys : false,
    role : null,
    pagesize : 4096
}
const Execsql = (sql,params,callback)=>{
    Firebird.attach(dbOptions, (err, db)=> {
        if (err){
            return callback(err,[]);
        }
        db.query(sql,params,(err, result)=> {
//            db.detach(); //  removido pois recarregava a párina
            if (err) {
                return callback(err,[]);
            } else {
                    return callback(false,result);
                }
            }
        );
    });    
}

export {Execsql}