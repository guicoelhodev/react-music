
export default function favoriteMusicReducer(state=[], action){

    
    switch(action.type){
        case 'FAVORITEMUSIC':            
            console.log('Apareci')
            return [...state, ...action.payload]

        case 'REMOVE':             
            
        return state.filter(comment => comment.title !== action.payload);

        default:
                return state;
   
    }
}