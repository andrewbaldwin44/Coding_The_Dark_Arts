import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { TAG_ACTIONS } from '../../components/tags/tags.actions';
import AllPosts from '../../components/posts/allPosts';

function TagPage({ fetchPostsByTag, posts, ...props }) {
  const { query } = useRouter();
  const { tag } = query;

  useEffect(() => {
    if (tag) {
      fetchPostsByTag({ tag });
    }
  }, [tag]);

  if (posts) {
    return <AllPosts posts={posts} title={tag} {...props} />;
  }

  return null;
}

const storeConnector = ({ posts, search }) => ({
  posts: posts.posts,
  searchValue: search.searchValue,
});

const actionCreator = {
  fetchPostsByTag: TAG_ACTIONS.fetchPostsByTag,
};

export default connect(storeConnector, actionCreator)(TagPage);
