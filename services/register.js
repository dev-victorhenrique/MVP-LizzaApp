import api from './api'

export async function registerApi(name,email,password,age,alergie,bloodType,liveAlone,address,cep){

   age = parseInt(age)
   console.log(typeof age)
   console.log(typeof liveAlone)

   try {
      const response = await api.post('/users',{
         name: name,
         age: age,
         email:email,
         password:password,
         alergie:alergie,
         bloodType:bloodType,
         liveAlone: liveAlone,
         cep:cep,
         address: address
      

      })

      return response
   } catch (error) {
         return null
      }
  


 

  

}