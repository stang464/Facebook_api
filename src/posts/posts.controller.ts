import { BaseResponseModel } from 'src/model/responst/BaseResponst';
import { STATUS_CODE } from './../constant/statusCode';
import { Controller, Get } from '@nestjs/common';
import * as moment from 'moment';

@Controller('posts')
export class PostsController {
  postData = [
    {
      id: 1,
      profileName: 'เพชรจ้า',
      profileImg: '',
      Timestamp: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000),
      ),

      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. /n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s./n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      likeTotal: Math.floor(Math.random() * 300),
      commentTotal: Math.floor(Math.random() * 300),
      images: [],
      shareTotal: Math.floor(Math.random() * 300),
    },
    {
      id: 2,
      profileName: 'ตังจ้า',
      profileImg: '',
      Timestamp: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000),
      ),

      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. /n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s./n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      likeTotal: Math.floor(Math.random() * 300),
      commentTotal: Math.floor(Math.random() * 300),
      images: [],
      shareTotal: Math.floor(Math.random() * 300),
    },
    {
      id: 3,
      profileName: 'หยกจ้า',
      profileImg: '',
      Timestamp: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000),
      ),

      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. /n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s./n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      likeTotal: Math.floor(Math.random() * 300),
      commentTotal: Math.floor(Math.random() * 300),
      images: [],
      shareTotal: Math.floor(Math.random() * 300),
    },
    {
      id: 4,
      profileName: 'อะตอมจ้า',
      profileImg: '',
      Timestamp: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000),
      ),

      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. /n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s./n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      likeTotal: Math.floor(Math.random() * 300),
      commentTotal: Math.floor(Math.random() * 300),
      images: [],
      shareTotal: Math.floor(Math.random() * 300),
    },
    {
      id: 5,
      profileImg: '',

      profileName: 'พี่เพลงจ้า',
      Timestamp: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000),
      ),

      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. /n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s./n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      likeTotal: Math.floor(Math.random() * 300),
      commentTotal: Math.floor(Math.random() * 300),
      images: [],
      shareTotal: Math.floor(Math.random() * 300),
    },
    {
      id: 6,
      profileImg: '',

      profileName: 'พี่แอWจ้า',
      Timestamp: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000),
      ),

      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. /n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s./n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      likeTotal: Math.floor(Math.random() * 300),
      commentTotal: Math.floor(Math.random() * 300),
      images: [],
      shareTotal: Math.floor(Math.random() * 300),
    },
    {
      id: 7,
      profileImg: '',

      profileName: 'ศรโอ้ตจ้า',
      Timestamp: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000),
      ),

      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. /n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s./n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      likeTotal: Math.floor(Math.random() * 300),
      commentTotal: Math.floor(Math.random() * 300),
      images: [],
      shareTotal: Math.floor(Math.random() * 300),
    },
    {
      id: 8,
      profileImg: '',

      profileName: 'พี่ข้าวโอ้ตจ้า',
      Timestamp: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000),
      ),

      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. /n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s./n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      likeTotal: Math.floor(Math.random() * 300),
      commentTotal: Math.floor(Math.random() * 300),
      images: [],
      shareTotal: Math.floor(Math.random() * 300),
    },
    {
      id: 9,
      profileImg: '',
      profileName: 'แชมป์จ้า',
      Timestamp: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000),
      ),

      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. /n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s./n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      likeTotal: Math.floor(Math.random() * 300),
      commentTotal: Math.floor(Math.random() * 300),
      images: [],
      shareTotal: Math.floor(Math.random() * 300),
    },
  ];

  imagesRandom = async (n = 1) => {
    const urlArr = [];
    for (let i = 0; i < n; i++) {
      const randomNum = Math.floor(Math.random() * 300);
      const url = await fetch(
        `https://picsum.photos/id/${randomNum}/600/450`,
      ).then((res) => urlArr.push(res.url));
    }
    return urlArr;
  };
  imagesPhoto = async () => {
    const randomNum = Math.floor(Math.random() * 300);
    const url = await fetch(`https://picsum.photos/id/${randomNum}/60/60`).then(
      (res) => res.url,
    );
    return url;
  };

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
    const arr = [];
    for (const i in this.postData) {
      const img = await this.imagesRandom(Math.floor(Math.random() * 5));
      const imgProfile = await this.imagesPhoto();
      arr.push({ ...this.postData[i], images: img, profileImg: imgProfile });
    }
    const res = await this.baseResponse(STATUS_CODE.STATUS_CODE_200, arr);
    return res;
  }
}
