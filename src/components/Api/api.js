import axios from "axios"

axios.defaults.baseURL = 'https://pixabay.com/api/'
const API_KEY = '40632967-013f73fc2657493819414c02d'



    
    
export const getImages = async (query, page) => {
    
    const {data}= await axios.get(`?key=${API_KEY}&q=${query}&page=${page}`, {
        params: {
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            per_page: 12,
        },
    });
   
    return data
}