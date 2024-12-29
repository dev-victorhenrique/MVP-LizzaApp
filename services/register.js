import api from './api'

export async function register(data){


   console.log(typeof(data[1]))

   data[1] = parseInt(data[1])

 

   try {
      const response = await api.post('/users',{
         name:data[0],
         age:data[1],
         email:data[2],
         password:data[3],
         alergie:data[7],
         bloodType:data[6],
         LiveAlone:data[9],
         cep:data[4],
         address:data[5],
      

      })
   } catch (error) {
      console.error("Erro ao tentar registrar:", error);
   }
  

   console.log(typeof(data[1]))
   console.log(typeof(data[2]))
   console.log(typeof(data[3]))
   console.log(typeof(data[4]))
   console.log(typeof(data[5]))
   console.log(typeof(data[6]))
   console.log(typeof(data[7]))
   console.log(typeof(data[8]))
   console.log(typeof(data[9]))

      console.log(data)

   //return response.data
 

  

}