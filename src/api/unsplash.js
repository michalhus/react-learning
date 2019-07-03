import axios from 'axios';

//This is being define and exported to ease use in App.js - see unsplash.get()
export default axios.create({
    //API base url
    baseURL: 'https://api.unsplash.com',
    headers: {
        //Used for authentication to APIs
        Authorization: 
            'Client-ID 94b1974dabe9292a5e385f4bba69e1919cc1a3d29d7995a08b8861bb2daec10f'
    }
});

