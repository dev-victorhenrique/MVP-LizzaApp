import api from './api'

export async function loginApi(email,password){

    const response = await api.post('/auth',{
        email:email,
        password:password
    })
   

    return response.data.token;
}

