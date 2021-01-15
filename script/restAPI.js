const fetch = require("node-fetch");

class RestClient {

    constructor() {
        this.uri = 'https://mobilezut.herokuapp.com';
    }

    async get(item) {
        return new Promise(resolve => {
            fetch(`${this.uri}/location/details?` + new URLSearchParams({
                locName: item.locName,
                roomName: item.roomName,
            }), {
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    resolve(res);
                });
        });
    }
}

module.exports = RestClient;