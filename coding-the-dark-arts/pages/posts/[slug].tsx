import { useEffect, createRef, useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import {
  clearPostData,
  fetchArticlePayload,
  fetchCommentPayload,
  postComment,
  updateComment,
  deleteComment,
} from '../../components/posts/posts.actions';
import IndividualPost from '../../components/posts/individualPost';
import { IUserData, IComment } from '../../components/types/types';

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

interface IIndividualPostContainer {
  articles: IArticles;
  clearPostData: () => void;
  comments: IComment[];
  fetchArticlePayload: (slug: string | string[]) => void;
  fetchCommentPayload: (slug: string | string[]) => void;
  postComment: (payload: any) => void;
  updateComment: (payload: any) => void;
  deleteComment: (payload: any) => void;
  userData: IUserData;
}

function IndividualPostContainer({
  articles,
  clearPostData,
  comments,
  fetchArticlePayload,
  fetchCommentPayload,
  postComment,
  updateComment,
  deleteComment,
  userData,
}: IIndividualPostContainer) {
  const { query } = useRouter();
  const { slug } = query;
  const userFieldInput: React.RefObject<HTMLInputElement> = createRef();
  const commentFieldInput: React.RefObject<HTMLInputElement> = createRef();

  const updatedUserFieldInput: React.RefObject<HTMLInputElement> = createRef();
  const updatedCommentFieldInput: React.RefObject<HTMLInputElement> = createRef();
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

    const comment = commentFieldInput.current.value;

    postComment({ comment, slug, uid: userData.uid, user: userData.displayName });
  };

  const onDeleteComment = commentID => {
    deleteComment({ commentID, slug });
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
        onDeleteComment={onDeleteComment}
        onSubmitComment={onSubmitComment}
        onUpdateComment={onUpdateComment}
        setEditingComment={setEditingComment}
        updatedCommentFieldInput={updatedCommentFieldInput}
        updatedUserFieldInput={updatedUserFieldInput}
        userData={userData}
        userFieldInput={userFieldInput}
      />
    );
  }
  return null;
}

export default connect(
  ({ posts, firebase }) => ({
    articles: posts.articles,
    comments: posts.comments,
    userData: {
      uid: firebase.userData ? firebase.userData.uid : null,
      displayName: firebase.userData ? firebase.userData.displayName : null,
    },
  }),
  {
    clearPostData,
    fetchArticlePayload,
    fetchCommentPayload,
    postComment,
    updateComment,
    deleteComment,
  },
)(IndividualPostContainer);
