export function getMusic (title, artist, duration, image, link, audio){
    return {
        type: 'GETMUSIC',
        payload: [title, artist, duration, image, link, audio]
    }
}