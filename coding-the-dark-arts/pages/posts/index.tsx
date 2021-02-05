import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import AllPosts from '../../components/posts/allPosts';
import { fetchAllPosts as fetchAllPostsAction } from '../../components/posts/posts.actions';

interface IAllPostsPage {
  searchValue: string;
}

function AllPostsPage({ fetchAllPosts, posts, ...props }: IAllPostsPage) {
  useEffect(() => {
    fetchAllPosts();
  }, []);

  if (posts) {
    return <AllPosts posts={posts} {...props} />;
  }

  return null;
}

const storeConnector = ({ posts, search }) => ({
  posts: posts.allPosts,
  searchValue: search.searchValue,
});
const actionCreators = {
  fetchAllPosts: fetchAllPostsAction,
};

export default connect(storeConnector, actionCreators)(AllPostsPage);
