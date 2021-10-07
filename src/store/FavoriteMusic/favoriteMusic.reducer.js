
export default function favoriteMusicReducer(state=[], action){

    
    switch(action.type){
        case 'FAVORITEMUSIC':            
    
            return [...state, ...action.payload]

        case 'REM-TEM':             
                return state.filter(({ title }) => title !== action.payload); 
        
        default:
                return state;
   
    }
}