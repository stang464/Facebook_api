import { BaseResponseModel } from 'src/model/responst/BaseResponst';

export class BaseResponse {
  private status: string;
  private data: any;

  constructor(status: string, data: any) {
    this.status = status;
    this.data = data;
  }

  async baseResponse(status: string, data: any): Promise<BaseResponseModel> {
    const baseResponse = new BaseResponse(status, data);
    const res: BaseResponseModel = {
      timestemp: new Date(),
      desc: 'test',
      data: baseResponse.data,
      status: baseResponse.status,
    };
    return res;
  }
}
