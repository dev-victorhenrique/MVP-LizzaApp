    import { Injectable } from "@nestjs/common";
    import { Repository } from "typeorm";
    import { UserEntity } from "src/user/entity/user.entity";
    import { AuthDTO } from "../dto/auth.dto";
    import { InjectRepository } from "@nestjs/typeorm";
    import { JwtService } from "@nestjs/jwt";

    @Injectable()
    export class AuthRepository{

        constructor( 
            @InjectRepository(UserEntity) 
            private readonly authRepository:Repository<UserEntity>,

            private jwtService:JwtService
        ){}

        async findOne(data:AuthDTO){
          const user = await this.authRepository.findOne({
            where:{
                email:data.email,
                password:data.password
            }
          })

           if(!user){
             console.log(user)
              return null
              
           }

          

           const {password, ...payload} = {...user}
          //console.log(payload)

           return this.jwtService.sign(payload)
        }
    }