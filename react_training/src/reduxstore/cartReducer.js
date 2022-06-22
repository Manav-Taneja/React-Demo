export function CartReducer(state={},action){
    switch(action.type){
       case "CART_COUNT":{
           state={...state}
           state["cakeCount"] = action.payload;
           console.log(action.payload,"pppp")
           return state
       }
       default :return state
    }
   }
   