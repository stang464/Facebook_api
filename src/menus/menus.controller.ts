import { STATUS_CODE } from './../constant/statusCode';
import { BaseResponseModel } from './../model/responst/BaseResponst';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('menus')
export class MenusController {
  mock = [
    {
      id: 6,
      title: 'Messenger',
      seq: 6,
      icon: 'messenger',
    },
    {
      id: 1,
      title: 'เพื่อน',
      seq: 1,
      icon: 'friend',
    },
    {
      id: 2,
      title: 'กลุ่ม',
      seq: 2,
      icon: 'group',
    },
    {
      id: 5,
      title: 'Marketplace',
      seq: 5,
      icon: 'marketplace',
    },
    {
      id: 9,
      title: 'ที่บันทึกไว้',
      seq: 9,
      icon: 'saved',
    },
    {
      id: 4,
      title: 'ล่าสุด',
      seq: 4,
      icon: 'latest',
    },
    {
      id: 3,
      title: 'ความทรงจำ',
      seq: 3,
      icon: 'memory',
    },
    {
      id: 7,
      title: 'Messenger Kid',
      seq: 7,
      icon: 'messenger_kid',
    },
    {
      id: 8,
      title: 'Watch',
      seq: 8,
      icon: 'Watch',
    },
  ];

  async baseResponse(status: string, data: any): Promise<BaseResponseModel> {
    const res: BaseResponseModel = {
      timestemp: new Date(),
      desc: 'test',
      data: data,
      status: status,
    };
    return res;
  }
  @Get('getMenu')
  async getMenu(@Query('sort') sort: boolean): Promise<BaseResponseModel> {
    // if (sort) {
    //   const arr = menuList;
    //   return arr.sort((a, b) => a.seq - b.seq);
    // }
    return this.baseResponse(STATUS_CODE.STATUS_CODE_200, this.mock);
  }
}
