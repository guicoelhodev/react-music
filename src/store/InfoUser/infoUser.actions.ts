export function getUser (name, city){
    return{
        type: 'GETUSERINFO',
        payload: [name,city]
    }
}