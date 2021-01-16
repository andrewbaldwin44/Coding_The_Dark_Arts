import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { clearPayload, fetchArticlePayload, fetchCommentPayload } from './posts.actions';
import IndividualPost from '../../components/posts/individualPost';

interface IArticles {
  image: {
    asset: {
      url: string;
    };
  };
  postContent: string;
  postDescription: string;
  postTitle: string;
}

interface IComments {
  user: string;
  comment: string;
}

interface IIndividualPostContainer {
  articles: IArticles;
  comments: IComments[];
  clearPayload: () => void;
  fetchArticlePayload: () => void;
  fetchCommentPayload: () => void;
}

function IndividualPostContainer({
  articles,
  comments,
  clearPayload,
  fetchArticlePayload,
  fetchCommentPayload,
}: IIndividualPostContainer) {
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
      <IndividualPost articles={articles} comments={comments} onSubmitComment={onSubmitComment} />
    );
  }
  return null;
}

export default connect(({ posts }) => ({ articles: posts.articles, comments: posts.comments }), {
  clearPayload,
  fetchArticlePayload,
  fetchCommentPayload,
})(IndividualPostContainer);
