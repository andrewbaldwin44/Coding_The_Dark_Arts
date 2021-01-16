import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { clearPayload, fetchArticlePayload, fetchCommentPayload } from './posts.actions';
import IndividualPost from '../../components/posts/individualPost';

function IndividualPostContainer({
  articles,
  comments,
  clearPayload,
  fetchArticlePayload,
  fetchCommentPayload,
}) {
  const { query } = useRouter();
  const { slug } = query;

  useEffect(() => {
    if (slug) {
      fetchArticlePayload(slug);
      fetchCommentPayload(slug);
    }

    return () => {
      clearPayload();
    };
  }, [slug]);

  const onSubmitComment = event => {
    event.preventDefault();
  };

  if (articles) {
    return (
      <IndividualPost
        articles={articles}
        comments={comments}
        onSubmitComment={onSubmitComment}
        slug={slug}
      />
    );
  }
  return null;
}

export default connect(({ posts }) => ({ articles: posts.articles, comments: posts.comments }), {
  clearPayload,
  fetchArticlePayload,
  fetchCommentPayload,
})(IndividualPostContainer);
