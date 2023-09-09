import { Test, TestingModule } from '@nestjs/testing';
import { SkytreeController } from './skytree.controller';
import { SkytreeService } from './skytree.service';

describe('SkytreeController', () => {
  let skytreeController: SkytreeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SkytreeController],
      providers: [SkytreeService],
    }).compile();

    skytreeController = app.get<SkytreeController>(SkytreeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(skytreeController.getHello()).toBe('Hello World!');
    });
  });
});
