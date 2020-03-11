const db = require('mongoose');

//mongodb+srv://db_user_telegram:madrid321431462@cluster0-rszgv.mongodb.net/test?retryWrites=true&w=majority
db.Promise = global.Promise;
'mongodb+srv://db_user_telegram:madrid321431462@cluster0-rszgv.mongodb.net/test?retryWrites=true&w=majority'

async function connect(url){
    await db.connect(url, {
        useNewUrlParser: true,
        dbName: 'platziTelegram_db'
    });
    console.log('[db] Conectada con exito');
}

module.exports = connect;
