import { useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Wrapper from '../../postsStyle/Wrapper';
import SearchWidget from '../../searchWidget';
import { IAllPosts } from '../../../pages/posts';

export default function AllPosts({ posts, searchValue }: IAllPosts) {
  const [searchResults, setSearchResults] = useState(null);
  const filteredPosts = searchResults || posts;

  useEffect(() => {
    // add in postTag
    setSearchResults(
      posts.filter(
        ({ postTitle, postDescription }) =>
          postTitle.toLowerCase().includes(searchValue.toLowerCase()) ||
          postDescription.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  }, [searchValue]);

  return (
    <div>
      <Head>
        <title>All Posts</title>
      </Head>

      <div className='all-post-wrapper'>
        <h1 className='all-post-title'>All Posts</h1>
        <div className='search-component'>
          <SearchWidget />
        </div>
        <div className='all-posts-cont'>
          {filteredPosts.map(({ image, postDescription, postTags, postTitle, slug }, index) => (
            <div key={`allposts-post-${index}`} className='c-post__wrapper'>
              <Link href={`/posts/${slug.current}`}>
                <a>
                  <Wrapper key={`post-title-${postTitle}`}>
                    <h1>{postTitle}</h1>
                    <h2>{postDescription}</h2>
                    <h3>{postTags.map(({ tagName }) => tagName).join(', ')}</h3>
                    <img alt='Post Thumbnail' className='dataPiece-sml' src={image.asset.url} />
                  </Wrapper>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
