const axios = require('axios');

module.exports = {

    login: (req, res) => { 
        axios.post('http://localhost:8000/login', req.body)
            .then((result) => {
                if (result.status == 200) {
                    res.status(200).send('Login successs');
                } 
            }).catch(e => res.status(400).send('Login failed'));
    },
}
