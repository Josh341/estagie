const url = 'http://localhost:5001/';
async function post(endPoint, body) {
    return fetch(`${url}${endPoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        })
}
async function get(endPoint, email) {
    return fetch(`${url}${endPoint}/${email}`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        })
}

async function getAllData(endPoint) {
    return fetch(`${url}${endPoint}`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        })
}

async function put(endPoint, email, body) {
    return fetch(`${url}${endPoint}/${email}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        })
}

async function remove(endPoint, email) {
        return fetch(`${url}${endPoint}/${email}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                return error;
            })
}