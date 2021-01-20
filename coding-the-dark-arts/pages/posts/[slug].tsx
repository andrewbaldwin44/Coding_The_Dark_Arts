import { useEffect, createRef, useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import {
  clearPostData,
  fetchArticlePayload,
  fetchCommentPayload,
  postComment,
  updateComment,
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
  comment: string;
  user: string;
}

interface IIndividualPostContainer {
  articles: IArticles;
  clearPostData: () => void;
  comments: IComments[];
  fetchArticlePayload: () => void;
  fetchCommentPayload: () => void;
  postComment: () => void;
  updateComment: () => void;
}

function IndividualPostContainer({
  articles,
  clearPostData,
  comments,
  fetchArticlePayload,
  fetchCommentPayload,
  postComment,
  updateComment,
}: IIndividualPostContainer) {
  const { query } = useRouter();
  const { slug } = query;
  const userFieldInput = createRef(null);
  const commentFieldInput = createRef(null);

  const updatedUserFieldInput = createRef(null);
  const updatedCommentFieldInput = createRef(null);
  const [editingComment, setEditingComment] = useState('');

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

  useEffect(() => {
    if (editingComment) {
      setEditingComment('');
    }
  }, [comments]);

  const onSubmitComment = event => {
    event.preventDefault();

    const user = userFieldInput.current.value;
    const comment = commentFieldInput.current.value;

    postComment({ comment, slug, user });
  };

  const onUpdateComment = event => {
    event.preventDefault();

    const user = updatedUserFieldInput.current.value;
    const comment = updatedCommentFieldInput.current.value;

    updateComment({ commentID: editingComment, comment, slug, user });
  };

  if (articles) {
    return (
      <IndividualPost
        articles={articles}
        commentFieldInput={commentFieldInput}
        comments={comments}
        editingComment={editingComment}
        onSubmitComment={onSubmitComment}
        onUpdateComment={onUpdateComment}
        setEditingComment={setEditingComment}
        updatedCommentFieldInput={updatedCommentFieldInput}
        updatedUserFieldInput={updatedUserFieldInput}
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
  updateComment,
})(IndividualPostContainer);
