import { Controller, Get, Query } from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('menus')
export class MenusController {
  private services = new MenusService();

  @Get('getMenu')
  async getMenu(@Query('sort') sort: boolean) {
    return this.services.findAll();
  }
}
