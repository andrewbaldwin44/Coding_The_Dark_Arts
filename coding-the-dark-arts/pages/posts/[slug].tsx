import { useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import {
  clearPostData,
  fetchArticlePayload,
  fetchCommentPayload,
  postComment,
} from './posts.actions';
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
  postComment,
}: IIndividualPostContainer) {
  const { query } = useRouter();
  const { slug } = query;
  const userFieldInput = createRef(null);
  const commentFieldInput = createRef(null);

  useEffect(() => {
    if (slug) {
      fetchArticlePayload(slug);
      fetchCommentPayload(slug);
    }

    return () => {
      clearPostData();
    };
  }, [slug]);

  useEffect(() => {
    if (userFieldInput.current && commentFieldInput.current) {
      userFieldInput.current.value = '';
      commentFieldInput.current.value = '';
    }
  }, [commentFieldInput, comments, userFieldInput]);

  const onSubmitComment = event => {
    event.preventDefault();

    const user = userFieldInput.current.value;
    const comment = commentFieldInput.current.value;

    postComment({ comment, slug, user });
  };

  if (articles) {
    return (
      <IndividualPost
        articles={articles}
        commentFieldInput={commentFieldInput}
        comments={comments}
        onSubmitComment={onSubmitComment}
        userFieldInput={userFieldInput}
      />
    );
  }
  return null;
}

export default connect(({ posts }) => ({ articles: posts.articles, comments: posts.comments }), {
  clearPostData,
  fetchArticlePayload,
  fetchCommentPayload,
  postComment,
})(IndividualPostContainer);
