import axios from 'axios';

//const EMPLOYEE_API_BASE_URL = "http://localhost:8081/Api/allemployees";
const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/artists"

class ArtistManagementService{

    getArtists(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createArtist(artist){
        return axios.post(EMPLOYEE_API_BASE_URL, artist)
    }

    updateArtist(artist,id){
        return axios.put(EMPLOYEE_API_BASE_URL+"/artist/"+id,artist);
    }

    deleteArtist(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/artist/"+id)
    }

}

export default new ArtistManagementService()

// import { API_URL, JPA_API_URL } from '../../Constants'

// class TodoDataService {

//     retrieveAllTodos(name) {
//         //console.log('executed service')
//         return axios.get(`${JPA_API_URL}/users/${name}/todos`);
//     }

//     retrieveTodo(name, id) {
//         //console.log('executed service')
//         return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
//     }

//     deleteTodo(name, id) {
//         //console.log('executed service')
//         return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
//     }

//     updateTodo(name, id, todo) {
//         //console.log('executed service')
//         return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
//     }

//     createTodo(name, todo) {
//         //console.log('executed service')
//         return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
//     }

// }

// export default new TodoDataService()