export function getFavoriteMusic (title, artist, duration, image, link, audio){
    return {
        type: 'FAVORITEMUSIC',
        payload: [{title, artist, duration, image, link, audio}]
    }
}

export function addItem(){
    return{
        type:'ADD_ITEM'
    }
}
export function removeItem(){
    return{
        type:'REM_TEM'
    }
}