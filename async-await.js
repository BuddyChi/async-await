const fetch = require('node-fetch');

function fetchUser() { 
    return new Promise((resolve, reject) => {
        fetch('https://api.github.com/users/superman66')
        .then((data) => {
            resolve(data.json());
        }, (error) => {
            reject(error);
        })
    });
}

function getUserByPromise() {
    fetchUser()
        .then((data) => {
            console.log(data);
        }, (error) => {
            console.log(error);
        })
}
getUserByPromise();