 export function Reducer(state={},action){
 switch(action.type){
    case "LOGIN":{
        state={...state}
        state.logedin=true
        return state
    }
    default :return state
 }
}
