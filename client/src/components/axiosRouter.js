import axios from 'axios';

export async function findUser(userName){
    return await axios.get('/api/v1/users/' + userName);
}

export async function test(){
    return await axios.get('/api/v1/pokedex/60');
}
