export function getFavoriteMusic (title, artist, duration, image, link, audio){
    return {
        type: 'FAVORITEMUSIC',
        payload: [{title, artist, duration, image, link, audio}]
    }
}

export function removeItem(title){
    return{
        type:'REMOVE',
        payload:title
    }
}