import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHolaMundo(): string {
    return 'Hola Mundo ETOILE!';
  }
}
