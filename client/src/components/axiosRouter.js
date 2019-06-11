import axios from 'axios';

export async function findUser(userName){
    return await axios.get('/api/v1/users/' + userName);
}

export async function createUser(userName, password){
    return await axios.post('/api/v1/users/', {user_name: userName, password});
}

export async function test(){
    return await axios.get('/api/v1/pokedex/60');
}
