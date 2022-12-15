const Axios = require('axios')

const BASE_URL = 'https://prashant-blog-app.onrender.com'

module.exports = Axios.create({
    baseURL: BASE_URL
})