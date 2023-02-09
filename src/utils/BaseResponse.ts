import { BaseResponseModel } from 'src/model/responst/BaseResponst';

export class BaseResponse {
  private timestamp: Date;
  private desc: string;
  private status: string;
  private data: any;

  constructor(status: string, desc: string, data: any) {
    this.status = status;
    this.data = data;
    this.timestamp = new Date();
    this.desc = desc;
  }
}
