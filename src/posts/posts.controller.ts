import { BaseResponseModel } from 'src/model/responst/BaseResponst';
import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  private services = new PostsService();

  async baseResponse(status: string, data: any): Promise<BaseResponseModel> {
    const res: BaseResponseModel = {
      timestemp: new Date(),
      desc: 'test',
      data: data,
      status: status,
    };
    return res;
  }

  @Get('getAllPost')
  async getAllPost() {
    return await this.services.findAll();
  }
}
