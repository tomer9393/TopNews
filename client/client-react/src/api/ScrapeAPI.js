import axios from 'axios'
const baseUrl = 'http://localhost:8081';

export const getScrapeById = async (id) => {
    try {
        const scrape = await axios.get(`${baseUrl}/scrapes/id/${id}`);
        return scrape;
    } catch (error) { throw new Error(error); }
}

export const getLatestScrapes = async (numOfScrapes) => {
    try {
        const scrapes = await axios.get(`${baseUrl}/scrapes/latestScrapes/${numOfScrapes}`);
        return scrapes;
    } catch (error) { throw new Error(error); }
}
