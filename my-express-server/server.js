const express = require('express')

const app = express()
const PORT = 3000

// app.get('/', (req, res) => {
//     console.log(req.url)
//     res.send('Home!')
// })

app.listen(PORT, () => {
    console.log(`SERVER IS UP & RUNNING! at ${PORT}`)
})



// API
// EndPoints
// Paths
// Parameters
// Authentication



// import config from "../config"

// const base_url = config.base_url || "http://43.204.223.255:5000/api"
// const API_ENDPOINTS = {
   
// }

// async function callAPI(url, type, data = null, headers = {}) {

//     type = String(type).toUpperCase()
//     let defaultHeaders = {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
//     const token = await AsyncStorage.getItem('token')
//     if (token && token.length > 0) {
//         defaultHeaders['Authorization'] = token
//     }
//     let config = {
//         method: type,
//         headers: { ...defaultHeaders, ...headers }
//     }
//     if (type === 'GET' && data !== null && Object.keys(data).length > 0) {
//         let urlParams = []
//         for (let key in data) {
//             urlParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
//         }
//         url = `${url}?${urlParams.join('&')}`
//     }
//     else if (data !== null && ['POST', 'PUT', 'PATCH', 'DELETE'].includes(type)) {
//         config['body'] = JSON.stringify(data)
//     }
//     return fetch(url, config)
//         .then(async (response) => {
//             if (response.status == 401) {
//                 //unauthorised
//                 return
//             }
//             else if (response.status == 403) {
//                 //forbidden
//                 return
//             }
//             return response.json()
//         })
//         .catch((error) => {
//             return error
//         })
// }
// export default API_ENDPOINTS