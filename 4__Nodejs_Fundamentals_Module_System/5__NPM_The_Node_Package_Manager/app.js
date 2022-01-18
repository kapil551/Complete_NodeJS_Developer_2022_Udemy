
const axios = require('axios');

axios.get('https://www.google.com')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log("Response Data Fetching Done 💣💣💣💣💣");
    });