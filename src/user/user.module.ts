    import { Module } from "@nestjs/common";
    import { TypeOrmModule } from "@nestjs/typeorm";
    import { UserController } from "./controllers/user.Controller";
    import { UserRepository } from "./repository/user.repository";
    import { EmailUniqueValidator } from "./validation/uniqueEmail.validator";
    import { UserEntity } from "./entity/user.entity";
    import { AuthGuard } from "src/auth/guards/auth.guards";
import { AuthModule } from "src/auth/auth.module";

    @Module({
        imports:[TypeOrmModule.forFeature([UserEntity]), AuthModule],
        controllers:[UserController],
        providers:[UserRepository,EmailUniqueValidator]
    })
    export class UserModule{}