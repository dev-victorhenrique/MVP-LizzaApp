import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entity/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepository{


    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository:Repository<UserEntity>
    ){}

    async insertDB(dataUsers:UserEntity){
       const user = this.userRepository.create(dataUsers)
       const result = await this.userRepository.save(user)
        return result ? result:false
    }

    async fetch(){
       return await this.userRepository.find()
    }

    async isEmailExists(email){
        const userExists = await this.userRepository.findOne({ where: { email } });  // Buscando pelo e-mail
        return userExists ? true : false;
    }

    async fetchById(id){
        const userData = await this.userRepository.findOne({where:{id}})
        return userData
    }
}