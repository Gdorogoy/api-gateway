import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request,Response } from 'express';

@Injectable()
export class AppService {

  constructor(private readonly jwtService:JwtService){
  
  }

  async generateToken(){
    const payload={
      username:'test',
      email:'test@mail.com'
    }
    const token=this.jwtService.sign(payload);

    return token;

  }

  async validateRequest(req:Request,res:Response){
    const token=req.headers['authorization'];

    if(!token || !token.startsWith('Bearer ')){
      throw new UnauthorizedException('No token provided');
    }

    try{

      const data=await this.jwtService.verify(token.split(' ')[1],{ignoreExpiration:false});
      res.setHeader('X-User', JSON.stringify(data));

      res.status(200).send();

    }catch(err){
      throw new UnauthorizedException('Wrong credentials');
    }
    
  }


}
