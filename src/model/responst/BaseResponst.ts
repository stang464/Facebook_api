import { Timestamp } from 'rxjs';

export interface BaseResponseModel {
  status: string;
  desc: string;
  data: any;
  timestemp: Date;
}

export async function baseResponse(
  status: string,
  data: any,
): Promise<BaseResponseModel> {
  const res: BaseResponseModel = {
    timestemp: new Date(),
    desc: 'test',
    data: data,
    status: status,
  };
  return res;
}
