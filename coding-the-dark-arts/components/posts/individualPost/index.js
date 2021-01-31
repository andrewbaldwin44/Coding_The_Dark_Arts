import Head from 'next/head';
import React, { useEffect } from 'react';
import Markdown from '../../markdown';
import Filter from 'bad-words';

export default function individualPost({
  articles: {
    image: {
      asset: { url: imageURL },
    },
    postContent,
    postDescription,
    postTitle,
  },
  commentFieldInput,
  comments,
  editingComment,
  onSubmitComment,
  onUpdateComment,
  setEditingComment,
  onDeleteComment,
  updatedCommentFieldInput,
  updatedUserFieldInput,
  userFieldInput,
  userData: { uid, displayName },
}) {
  let filter = new Filter();

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

      <form className='c-comment_form' onSubmit={onSubmitComment}>
        <label>Leave a comment</label>
        <input ref={userFieldInput} placeholder='Name' type='text' maxLength='25' />
        <textarea rows='4' ref={commentFieldInput} placeholder='Comment' type='text'></textarea>
        <button type='submit'>Post</button>
      </form>
      <div className='c-comment_section'>
        {console.log(comments)}
        {comments &&
          comments.map(({ id, uid: commenterUID, comment: { user, comment } }, index) => {
            return (
              <div className='c-comment_individual' key={`post-comment-${index}`}>
                {editingComment === id ? (
                  <form onSubmit={onUpdateComment}>
                    <input
                      ref={updatedUserFieldInput}
                      defaultValue={user}
                      type='text'
                      width='200px'
                    />
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
                    <h2 className='c-comment_user'>{user}</h2>
                    <p className='c-comment_comment'>{comment}</p>
                    {uid === commenterUID && (
                      <>
                        <button
                          className='c-comment_edit c-comment_button'
                          onClick={() => setEditingComment(id)}
                          type='button'
                        >
                          Edit
                        </button>
                        <span>&#9679;</span>
                        <button
                          className='c-comment_delete c-comment_button'
                          onClick={() => onDeleteComment(id)}
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
