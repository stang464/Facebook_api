export interface Post {
  id: number;
  profileName: string;
  profileImg: string;
  Timestamp: string;
  content: string;
  likeTotal: number;
  commentTotal: number;
  images: Array<string> | undefined;
  shareTotal: number;
}



// export const postData: Array<Post> = 
