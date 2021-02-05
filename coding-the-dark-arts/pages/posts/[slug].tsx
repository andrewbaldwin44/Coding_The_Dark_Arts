import { useEffect, createRef, useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import {
  POST_ACTIONS,
  IFetchPayload,
  IPostCommentPayload,
  IUpdateCommentPayload,
  IDeleteCommentPayload,
} from '../../components/posts/posts.actions';
import IndividualPost from '../../components/posts/individualPost';
import { IComment, IPostDetails, IUserData } from '../../components/types/types';

interface IIndividualPostContainer {
  post: IPostDetails;
  clearPostData: () => void;
  comments: IComment[];
  fetchPostDetails: (slug: IFetchPayload) => void;
  fetchCommentPayload: (slug: IFetchPayload) => void;
  postComment: (payload: IPostCommentPayload) => void;
  updateComment: (payload: IUpdateCommentPayload) => void;
  deleteComment: (payload: IDeleteCommentPayload) => void;
  userData: IUserData;
}

function IndividualPostContainer({
  post,
  clearPostData,
  comments,
  fetchPostDetails,
  fetchComments,
  postComment,
  updateComment,
  deleteComment,
  userData,
}: IIndividualPostContainer) {
  const { query } = useRouter();
  const { slug } = query;
  const commentFieldInput: React.RefObject<HTMLInputElement> = createRef();

  const updatedCommentFieldInput: React.RefObject<HTMLInputElement> = createRef();
  const [editingComment, setEditingComment] = useState('');

  useEffect(() => {
    if (slug) {
      fetchPostDetails({ slug });
      fetchComments({ slug });
    }

    return () => {
      clearPostData();
    };
  }, [slug]);

  useEffect(() => {
    if (commentFieldInput.current) {
      commentFieldInput.current.value = '';
    }
  }, [commentFieldInput, comments]);

  useEffect(() => {
    if (editingComment) {
      setEditingComment('');
    }
  }, [comments]);

  const onSubmitComment = event => {
    event.preventDefault();

    const comment = commentFieldInput.current.value;

    postComment({ comment, slug, uid: userData.uid, displayName: userData.displayName });
  };

  const onDeleteComment = timestamp => {
    deleteComment({ slug, timestamp });
  };

  const onUpdateComment = event => {
    event.preventDefault();

    const comment = updatedCommentFieldInput.current.value;

    updateComment({
      comment,
      slug,
      timestamp: editingComment,
      uid: userData.uid,
      displayName: userData.displayName,
    });
  };

  if (post) {
    return (
      <IndividualPost
        commentFieldInput={commentFieldInput}
        comments={comments}
        editingComment={editingComment}
        onDeleteComment={onDeleteComment}
        onSubmitComment={onSubmitComment}
        onUpdateComment={onUpdateComment}
        post={post}
        setEditingComment={setEditingComment}
        updatedCommentFieldInput={updatedCommentFieldInput}
        userData={userData}
      />
    );
  }
  return null;
}

export default connect(
  ({ posts, firebase }) => ({
    post: posts.postDetails,
    comments: posts.comments,
    userData: {
      uid: firebase.userData ? firebase.userData.uid : null,
      displayName: firebase.userData ? firebase.userData.displayName || 'Anonymous' : null,
    },
  }),
  {
    clearPostData: POST_ACTIONS.clearDetails,
    fetchPostDetails: POST_ACTIONS.fetchDetails,
    fetchComments: POST_ACTIONS.fetchComments,
    postComment: POST_ACTIONS.postComment,
    updateComment: POST_ACTIONS.updateComment,
    deleteComment: POST_ACTIONS.deleteComment,
  },
)(IndividualPostContainer);
