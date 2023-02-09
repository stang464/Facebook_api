import { MenusController } from './menus.controller';
import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';

@Module({
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
