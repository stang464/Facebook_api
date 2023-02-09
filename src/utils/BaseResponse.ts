import { BaseResponseModel } from 'src/model/responst/BaseResponst';

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
