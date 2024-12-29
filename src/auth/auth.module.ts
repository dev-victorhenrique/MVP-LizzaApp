import { Module, UseGuards } from "@nestjs/common";
import { AuthController } from "./controllers/auth.Controller";
import { AuthRepository } from "./repository/auth.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/user/entity/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { AuthGuard } from "./guards/auth.guards";


@Module({
    imports:[
        TypeOrmModule.forFeature([UserEntity]),
        JwtModule.register({
            secret: 'lizzaStartup',
            signOptions:{expiresIn: '1h'}
        })
    ],
    controllers:[AuthController],
    providers:[AuthRepository, AuthGuard],
    exports:[AuthGuard,JwtModule]

})

export class AuthModule{}