import { Module } from '@nestjs/common';
import { SkytreeController } from './skytree.controller';
import { SkytreeService } from './skytree.service';

@Module({
  imports: [],
  controllers: [SkytreeController],
  providers: [SkytreeService],
})
export class SkytreeModule {}
