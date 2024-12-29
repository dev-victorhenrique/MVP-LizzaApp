import { Body, Controller, Post,UnauthorizedException } from "@nestjs/common";
import { AuthDTO } from "../dto/auth.dto";
import { AuthRepository } from "../repository/auth.repository";


@Controller('auth')
export  class AuthController{

    constructor(private repository:AuthRepository){}

    @Post()
   async login(@Body() data:AuthDTO){
        const token = await this.repository.findOne(data)
        //console.log(token)

        if(token == null){
            throw new UnauthorizedException('Credenciais inválidas');
        }

       return {token}


    }
}