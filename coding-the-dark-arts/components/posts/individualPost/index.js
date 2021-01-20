import Head from 'next/head';

import Markdown from '../../markdown';

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
  updatedCommentFieldInput,
  updatedUserFieldInput,
  userFieldInput,
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

      <form onSubmit={onSubmitComment}>
        <label>Write a comment</label>
        <input ref={userFieldInput} placeholder='Name' type='text' />
        <input ref={commentFieldInput} placeholder='Comment' type='text' />
        <button type='submit'>Post</button>
      </form>

      {comments &&
        comments.map(({ id, comment: { user, comment } }, index) => {
          return (
            <div key={`post-comment-${index}`}>
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
                  <p>{user}</p>
                  <p>{comment}</p>
                  <button onClick={() => setEditingComment(id)} type='button'>
                    Edit
                  </button>
                </>
              )}
            </div>
          );
        })}
    </>
  );
}
