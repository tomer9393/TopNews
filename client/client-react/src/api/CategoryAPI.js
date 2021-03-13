import axios from 'axios'

const baseUrl = 'http://localhost:8081';
const ERROR = -1;
export const getCategoryByName = async (name) => {
    try {
        const category = await axios.get(`${baseUrl}/categories/${name}`);
        return category;
    } catch (error) { throw ERROR; }
}

