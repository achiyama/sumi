import { Injectable } from '@nestjs/common';

@Injectable()
export class SkytreeService {
  getHello(): string {
    return 'Hello World!';
  }
}
