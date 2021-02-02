import Head from 'next/head';
import React from 'react';
import Markdown from '../../markdown';
import Image from 'next/image';

export default function individualPost({
  post: {
    image: {
      asset: { url: imageURL },
    },
    postContent,
    postDescription,
    postTitle,
  },
  commentFieldInput,
  comments = [],
  editingComment,
  onDeleteComment,
  onSubmitComment,
  onUpdateComment,
  setEditingComment,
  updatedCommentFieldInput,
  userData: { uid: currentUID, userImage },
}) {
  return (
    <>
      <Head>
        <title>{postTitle}</title>
      </Head>

      <div className='c-single-post__wrapper'>
        <div>
          <h1>{postTitle}</h1>
          <h2>{postDescription}</h2>
        </div>
        <div className='single-post-img'>
          <img alt='Post Thumbnail' src={imageURL} />
        </div>
        <Markdown children={postContent} />
      </div>

      {currentUID && (
        <form className='c-comment_form' onSubmit={onSubmitComment}>
          <label>Leave a comment</label>
          <textarea ref={commentFieldInput} placeholder='Comment' rows='4' type='text' />
          <button type='submit'>Post</button>
        </form>
      )}

      <div className='c-comment_section'>
        {comments.map(({ comment, uid, timestamp, displayName }, index) => {
          return (
            <div key={`post-comment-${index}`} className='c-comment_individual'>
              {editingComment === timestamp ? (
                <form onSubmit={onUpdateComment}>
                  <input
                    ref={updatedCommentFieldInput}
                    defaultValue={comment}
                    type='text'
                    width='200px'
                  />
                  <button type='submit'>Save</button>
                </form>
              ) : (
                <>
                  {uid === currentUID && (
                    <img src={userImage || ''} style={{ borderRadius: '50%', width: '50px' }} />
                  )}

                  <h2 className='c-comment_user'>{displayName}</h2>
                  <p className='c-comment_comment'>{comment}</p>
                  {currentUID === uid && (
                    <>
                      <button
                        className='c-comment_edit c-comment_button'
                        onClick={() => setEditingComment(timestamp)}
                        type='button'
                      >
                        Edit
                      </button>
                      <span>&#9679;</span>
                      <button
                        className='c-comment_delete c-comment_button'
                        onClick={() => onDeleteComment(timestamp)}
                        type='button'
                      >
                        Delete
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
