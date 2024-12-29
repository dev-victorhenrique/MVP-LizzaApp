import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private jwtService:JwtService){}
    
    async canActivate(context: ExecutionContext): Promise<boolean>  {
        const request = context.switchToHttp().getRequest<Request>()
        const token = this.extractTokenFromHeader(request)

        if(!token){
            throw new UnauthorizedException('Token nao informado')
        }

        try {
            const payload = this.jwtService.verify(token)
            request['user'] = payload
        } catch (error) {
            throw new UnauthorizedException('token inválido')
        }

        return true
    }


    private extractTokenFromHeader(request:Request):string | undefined{
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
        
    }
}
 