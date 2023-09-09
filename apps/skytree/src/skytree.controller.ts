import { Controller, Get } from '@nestjs/common';
import { SkytreeService } from './skytree.service';

@Controller()
export class SkytreeController {
  constructor(private readonly skytreeService: SkytreeService) {}

  @Get()
  getHello(): string {
    return this.skytreeService.getHello();
  }
}
