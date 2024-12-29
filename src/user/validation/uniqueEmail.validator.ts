import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../repository/user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async:true})
export class EmailUniqueValidator implements ValidatorConstraintInterface{


  constructor(private repository:UserRepository){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>  {
        const userExists =  await this.repository.isEmailExists(value)

        return !userExists
    }

}

export const IsEmailUnique = (validationOptions:ValidationOptions) => {
    return (object:Object, prop:string) => {
        registerDecorator({
            target:object.constructor,
            propertyName:prop,
            options:validationOptions,
            constraints:[],
            validator:EmailUniqueValidator
        })
    }
} 