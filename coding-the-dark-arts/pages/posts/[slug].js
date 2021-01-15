import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCommentPayload } from './posts.actions';
import IndividualPost from '../../components/posts/individualPost';

function IndividualPostContainer({ fetchCommentPayload, comments }) {
  useEffect(() => {
    fetchCommentPayload();
  }, []);

  return <IndividualPost comments={comments} />;
}

export default connect(state => ({}), { fetchCommentPayload })(IndividualPostContainer);
