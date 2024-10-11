import axios from 'axios'

const api = axios.create({
    baseURL: 'https://binstorm.com.br:8081'
})

export const login = async (email, password) => {
    const  response = await api.post('/login',{
        email:email,
        Senha:password
    })
    console.log(response)

    return response
}