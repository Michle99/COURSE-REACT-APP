export default function StoreReducers(state={}, action){

    switch(action.type){

        case "STORE_COURSES": {
            state = {...state}
            state["courses"] = action.payload
            return state
        }

        default : return state
    }    
    
}