import api from './api'

async function loginApi(email,password){

    const response = await api.post('/auth/login',{
        email:email,
        password:password
    })
   

    return response.data.accesToken;
}

export default loginApi