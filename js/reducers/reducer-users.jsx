export default function(state=[],action){
    switch (action.type){
        case "ADD_USER":
            if(action.payload===''){
                return state;
            }
            var obj = {
                id: state.length?(state[0].id+1):1,
                username:action.payload
            }
            state = [...state];
            state.unshift(obj);
            break;
    }
    return state;
}