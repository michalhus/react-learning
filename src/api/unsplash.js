import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 94b1974dabe9292a5e385f4bba69e1919cc1a3d29d7995a08b8861bb2daec10f'
    }
});

