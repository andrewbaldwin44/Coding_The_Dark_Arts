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
  comments,
  onSubmitComment,
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
        <input placeholder='Name' type='text' />
        <input placeholder='Comment' type='text' />
        <button type='submit'>Post</button>
      </form>

      {comments &&
        comments.map(({ user, comment }, index) => {
          return (
            <div key={`post-comment-${index}`}>
              <p>{user}</p>
              <p>{comment}</p>
            </div>
          );
        })}
    </>
  );
}
