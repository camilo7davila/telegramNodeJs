const Model = require('./model')



function addUser(user) {
    const myUser = new Model(user);
    return myUser.save(); // save ya devuelve una promesa
}

async function getUser() {
    // let filter = {};
    // if(filterUser !== null){
    //     filter = {
    //         user : new RegExp(filterUser, "i") // user:filterUser pero usamos una expresion regular para que no sea keySensitive
    //     } 
    // }
    const user = await Model.find();
    return user
}

// async function updateText(id, message){
//     const foundMessage = await Model.findOne({_id: id})

//     foundMessage.message = message;
//     const newMessage = await foundMessage.save()
//     return newMessage;
// }

// function removeMessage(id){
//     return Model.deleteOne({
//         _id: id
//     })
// }

module.exports = {
    add: addUser,
    get: getUser
}