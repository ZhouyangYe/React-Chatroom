export default function(state=[],action){
    switch (action.type){
        case "SEND_MESSAGE":
            var obj = {
                id: state.length?(state[0].id+1):1,
                content: action.payload.content,
                username: action.payload.username
            }
            state = [...state];
            state.unshift(obj);
            break;
        case "BROADCAST":
            console.log("Get broadcast data!");
            var obj = {
                id: state.length?(state[0].id+1):1,
                content: action.data.content,
                username: action.data.username
            };
            state = [...state];
            state.unshift(obj);
            break;
    }
    return state;
}