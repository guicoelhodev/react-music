
export default function favoriteMusicReducer(state=[], action){

    
    switch(action.type){
        case 'FAVORITEMUSIC':

            let musicFilter= [];           
            const musicas = [...state, ...action.payload];
            musicas.forEach((item)=> {
                var duplicated  = musicFilter.findIndex(redItem => {
                    return item.id === redItem.id;
                }) > -1;
                if(!duplicated) {
                    musicFilter.push(item);
                }
            });

            return musicFilter

        case 'REMOVE':             
            
        return state.filter(comment => comment.title !== action.payload);

        default:
                return state;
   
    }
}

