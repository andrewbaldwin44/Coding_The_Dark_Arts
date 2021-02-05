import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import AllPosts from '../../components/posts/allPosts';
import { IPost } from '../../components/types/types';
import { POST_ACTIONS } from '../../components/posts/posts.actions';

export interface IAllPosts {
  searchValue: string;
  posts: IPost[];
}

interface IAllPostsPage extends IAllPosts {
  fetchAllPosts: () => void;
}

function AllPostsPage({ fetchAllPosts, posts, ...props }: IAllPostsPage) {
  useEffect(() => {
    if (!posts) {
      fetchAllPosts();
    }
  }, []);

  if (posts) {
    return <AllPosts posts={posts} {...props} />;
  }

  return null;
}

const storeConnector = ({ posts, search }) => ({
  posts: posts.posts,
  searchValue: search.searchValue,
});
const actionCreators = {
  fetchAllPosts: POST_ACTIONS.fetchAll,
};

export default connect(storeConnector, actionCreators)(AllPostsPage);
