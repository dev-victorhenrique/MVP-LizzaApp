import { Controller, Post,Get, Body, UseGuards, Param } from "@nestjs/common";
import { UserRepository } from "src/user/repository/user.repository";
import { CreateUserDTO } from "../dto/createUser.dto";
import { UserEntity } from "../entity/user.entity";
import {v4 as uuid} from  'uuid'
import { ListDTO } from "../dto/listUser.dto";
import { AuthGuard } from "src/auth/guards/auth.guards";

@Controller('/users')
export class UserController{

    constructor(private repository:UserRepository){}

    @Post()
    async insert(@Body() dataUser: CreateUserDTO){

        console.log(dataUser.email)

        const userEntity = new UserEntity()
        userEntity.email = dataUser.email
        userEntity.name = dataUser.name
        userEntity.password = dataUser.password
        userEntity.age = dataUser.age
        userEntity.cep = dataUser.cep
        userEntity.address = dataUser.address
        userEntity.bloodType = dataUser.bloodType
        userEntity.alergie = dataUser.alergie
        userEntity.liveAlone = dataUser.liveAlone
        userEntity.id = uuid()

       const  success = this.repository.insertDB(userEntity)
        return  success ? {id:userEntity.id, message:'user created'}: "usuario nao cadastrado"
    }

    @Get()
    @UseGuards(AuthGuard)
    async fetchUsers(){


        const usersSaved = await  this.repository.fetch()

        const listUsers = usersSaved.map(
            user => new ListDTO(
                user.name,
                user.id
                
            )
        );

        return listUsers
    }

    @Get('/:id')
    async FetchData(@Param('id') id:string){

        const userDataSaved = await this.repository.fetchById(id)
        console.log(userDataSaved)
        return userDataSaved
    }
}