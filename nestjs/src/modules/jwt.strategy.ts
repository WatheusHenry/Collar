import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrai o JWT do cabeçalho
      ignoreExpiration: false, // Não ignora a expiração do token
      secretOrKey: "b53c535d4ad2ee953638faf55be7072d469143dc1f570242ae8737cf5a262b3b" , // Mesma chave secreta do .env
    });
  }

  async validate(payload: any) {
    // O 'payload' aqui é o objeto decodificado do token
    return { userId: payload.sub, username: payload.username };
  }
}
