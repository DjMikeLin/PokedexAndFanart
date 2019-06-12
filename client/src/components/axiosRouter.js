import axios from 'axios';

export async function findUser(userName){
    return await axios.get('/api/v1/users/find/' + userName);
}

export async function createUser(userName, password){
    return await axios.post('/api/v1/users/', {"user_name": userName, password});
}

export async function updateUser(user){
    return await axios.put('/api/v1/users/' + user.id + '/', user); 
}

export async function deleteUser(id){
    return await axios.delete('/api/v1/users/' + id);
}

export async function addArt(url, userId){
    return await axios.post('/api/v1/fanarts/', {"url": url, "user": userId});
}

export async function deleteImage(id){
    return await axios.delete('/api/v1/fanarts/' + id);
}

export async function test(){
    return await axios.get('/api/v1/pokedex/60');
}
