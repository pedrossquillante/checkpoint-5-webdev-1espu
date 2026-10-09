import axios from 'axios';

const contactsApi = axios.create({
    baseURL: "https://https://6ac832b375a4ce3fe7228023.mockapi.io/webdev/contacts",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

contactsApi.interceptors.request.use(
    (config) => {
        console.log("Enviando requisição:", config.url);
        return config;
    },

    (error) => {
        return Promise.reject(error)
    }
)

contactsApi.interceptors.response.use(
    (response) => {
        console.log("Requisção bem sucedida", response.status);
        return response;
    },

    (error) => {
        console.log("Erro na requisição", error.message);
        return Promise.reject(error)
    }
)