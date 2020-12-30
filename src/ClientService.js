import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:44345';

export default class ClientService{
    GetClients(){
        return axios.get(`/clients`);
    }

    AddClient(client){
        return axios.post(`/clients`, client);
    }
}