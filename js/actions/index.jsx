export const addUser = (username)=>{
    console.log("You are trying to create "+username+'.');
    return {
        type: "ADD_USER",
        payload: username
    }
}

export const sendMessage = (username,message)=>{
    console.log('message is sent: '+username+" - "+message+".");
    return {
        type: "SEND_MESSAGE",
        payload: {
            username: username,
            content: message
        }
    }
}