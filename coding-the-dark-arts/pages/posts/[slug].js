import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { fetchCommentPayload } from './posts.actions';
import IndividualPost from '../../components/posts/individualPost';

function IndividualPostContainer({ fetchCommentPayload, comments }) {
  const { query } = useRouter();
  const { slug } = query;

  useEffect(() => {
    fetchCommentPayload(slug);
  }, []);

  return <IndividualPost comments={comments} slug={slug} />;
}

export default connect(({ posts }) => ({ comments: posts.comments }), { fetchCommentPayload })(
  IndividualPostContainer,
);
