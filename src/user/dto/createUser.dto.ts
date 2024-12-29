import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"
import { IsEmailUnique } from "../validation/uniqueEmail.validator"

export class CreateUserDTO{

    @IsNotEmpty()
    name:string

    @IsNumber()
    age:number

    @IsEmail()
    @IsEmailUnique({message:'there is an user with this email'})
    email:string

    @MinLength(6)
    password:string
    
    @IsString()
    alergie:string

    @IsString()
    bloodType:string

    @IsString()
    liveAlone:string

    @IsString()
    cep:string

    @IsString()
    address:string


}   