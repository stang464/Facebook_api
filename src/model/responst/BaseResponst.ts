import { Timestamp } from 'rxjs';

export interface BaseResponseModel {
  status: string;
  desc: string;
  data: any;
  timestemp: Date;
}
