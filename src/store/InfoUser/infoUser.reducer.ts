export default function getUserReducer(state= ['',''],action){
    switch (action.type){

        case 'GETUSERINFO':
            return action.payload
            
        default: 
            return state;
    }
}