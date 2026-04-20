import { ConfigService } from "@nestjs/config";

export const getJwtConfig =(configService:ConfigService)=>{
    return {
        secret:configService.getOrThrow('JWT_SECRET'),
        signOptions:{
            expiresIn:configService.getOrThrow('JWT_ACCESS_TOKEN_TTL')
        }
    }
}