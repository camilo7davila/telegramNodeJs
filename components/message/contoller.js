const store = require('./store')

function addMessage(chat, user, message, file) {
    return new Promise( (resolve, reject) => {
        if(!chat ||!user || !message) {
            console.error('[message controller] No hay chat o user o message');
            return reject('Los datos son incorrectos')
        }

        let fileUrl = '';
        if(file){
            fileUrl = 'http://localhost:3000/app/files/'+file.filename
        }

        const fullMessage ={
            chat: chat,
            user: user,
            message: message,
            file: fileUrl,
            date: new Date(),
        };
        store.add(fullMessage)
        resolve(fullMessage);
    } )
}

function getMessage(filterUser) {
    return new Promise( (resolve, reject) => {
        resolve(store.list(filterUser));
    } )
}

function updateMessage(id, message){
    return new Promise( async (resolve, rejet) => {
        if(!id || !message){
            return reject('invalid data')
        }

        const result = await store.updateText(id, message)
        resolve(result)
    })
}

function deleteMessage(id) {
    return new Promise((resolve,reject) => {
        if(!id){
            reject('Id invalido')
            return false
        }
        store.remove(id).then(() => {
            resolve()
        })
        .catch(e => {
            reject(e)
        })
    })
}


module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}