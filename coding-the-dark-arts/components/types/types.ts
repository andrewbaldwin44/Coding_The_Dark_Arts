export interface IPost {
  image: {
    asset: {
      url: string;
    };
  };
  postContent: string;
  postDescription: string;
  postTitle: string;
}

export interface IUserData {
  email: string;
  displayName: string;
  uid: string;
}

export interface IComment {
  comment: string;
  user: string;
}
