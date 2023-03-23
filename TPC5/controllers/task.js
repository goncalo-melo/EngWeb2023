var axios = require('axios')
const { response } = require('express')

module.exports.getTasks = () => {
    return axios.get('http://localhost:3000/tasks')
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error
            })
}

module.exports.getTask = id => {
    return axios.get('http://localhost:3000/tasks/' + id)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error
            })
}

module.exports.addTask = task => {
    return axios.post('http://localhost:3000/tasks/', task)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error
            })
}

module.exports.editTask = task => {
    return axios.put("http://localhost:3000/tasks/" + task.id, task)
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            return error
        })
}

module.exports.deleteTask = id => {
    return axios.delete("http://localhost:3000/tasks/" + id)
        .then(response=>{
            return response.data
        })
        .catch(error =>{
            return error
        })
}