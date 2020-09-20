import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID hQrbFo0KoEpvO857LdDfmSuSvBj7FjuSpDHGU1EtuMg'
    }
});