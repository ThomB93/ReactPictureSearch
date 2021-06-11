import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID sBf9ozfiqFoRa3qQ74s4fNyvxsn7W7ebJWXUq-TSe9A",
      }
})