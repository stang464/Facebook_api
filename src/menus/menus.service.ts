import { STATUS_DESC } from './../constant/statusCode';
import { Injectable } from '@nestjs/common';
import { mockMenuList } from '../constant/mockMenuList';
import { BaseResponse } from '../utils/BaseResponse';
import { STATUS_CODE } from '../constant/statusCode';

@Injectable()
export class MenusService {
  private menusListData = mockMenuList;

  public findAll = async () => {
    const res = new BaseResponse(
      STATUS_CODE.STATUS_CODE_200,
      STATUS_DESC.STATUS_CODE_200,
      this.menusListData,
    );
    return res;
  };
}
