import { STATUS_CODE } from './../constant/statusCode';
import {
  baseResponse,
  BaseResponseModel,
} from './../model/responst/BaseResponst';
import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Menu, menuList } from 'src/model/Menus.model';

@Controller('menus')
export class MenusController {
  @Get('getMenu')
  async getMenu(@Query('sort') sort: boolean): Promise<BaseResponseModel> {
    // if (sort) {
    //   const arr = menuList;
    //   return arr.sort((a, b) => a.seq - b.seq);
    // }
    return baseResponse(STATUS_CODE.STATUS_CODE_200, menuList);
  }
}
