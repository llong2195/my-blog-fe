import React, { FC } from 'react';
import './postlist.scss';
import PostItem from './postitem/PostItem';
import { IPost } from '../../types/post-type';

interface PostListProps {
  posts: IPost[];
  error: string;
}

const PostList: FC<PostListProps> = ({ posts, error }) => {
  return (
    <div className={'postList'}>
      {error ? (
        <div className={'errorFetching'}>Error fetching posts</div>
      ) : (
        posts.map((post, index) => (
          <PostItem
            key={post.id}
            // displayImage={index === 0}
            displayImage={index === index}
            post={post}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
