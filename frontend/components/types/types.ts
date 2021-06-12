export interface IPostDetails {
  image: {
    asset: {
      url: string;
    };
  };
  postContent: string;
  postDescription: string;
  postTitle: string;
}

export interface IPost extends IPostDetails {
  postTags: {
    tagName: string;
  };
  slug: {
    current: string;
  };
}

export interface IUserData {
  email: string;
  displayName: string;
  uid: string;
}

export interface IComment {
  comment: string;
  displayName: string;
  timestamp: string;
  uid: string;
}
