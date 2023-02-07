import { STATUS_CODE } from './../constant/statusCode';
import { Controller, Get } from '@nestjs/common';
import { imagesPhoto, imagesRandom, postData } from 'src/model/Posts.model';
import { baseResponse } from 'src/model/responst/BaseResponst';

@Controller('posts')
export class PostsController {
  @Get('getAllPost')
  async getAllPost() {
    const arr = [];
    for (const i in postData) {
      const img = await imagesRandom(Math.floor(Math.random() * 5));
      const imgProfile = await imagesPhoto();
      arr.push({ ...postData[i], images: img, profileImg: imgProfile });
    }
    const res = await baseResponse(STATUS_CODE.STATUS_CODE_200, arr);
    return res;
  }
}
