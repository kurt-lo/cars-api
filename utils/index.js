import axios from 'axios';

export const getCarsData = async (searchCar) => {
    const options = {
        method: 'GET',
        url: import.meta.env.VITE_API_URL,
        params: searchCar,
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}
