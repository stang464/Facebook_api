import { Injectable } from '@nestjs/common';
import { mockPostData } from '../constant/mockPostsData';
import { STATUS_CODE } from '../constant/statusCode';
import { BaseResponse } from '../utils/BaseResponse';

@Injectable()
export class PostsService {
  private postData = mockPostData;

  private imagesRandom = async (n = 1) => {
    const urlArr = [];
    for (let i = 0; i < n; i++) {
      const randomNum = Math.floor(Math.random() * 300);
      urlArr.push(`https://picsum.photos/id/${randomNum}/600/450`);
    }
    return urlArr;
  };
  private imagesPhoto = async () => {
    const randomNum = Math.floor(Math.random() * 300);
    return `https://picsum.photos/id/${randomNum}/60/60`;
  };

  public findAll = async () => {
    const arr = [];
    for (const i in this.postData) {
      const img = await this.imagesRandom(Math.floor(Math.random() * 5));
      const imgProfile = await this.imagesPhoto();
      arr.push({ ...this.postData[i], images: img, profileImg: imgProfile });
    }
    const res = new BaseResponse(STATUS_CODE.STATUS_CODE_200, arr);
    return res;
  };
}
