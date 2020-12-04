import React from 'react';
import Post from './Post';

const NewsFeed = ({ posts }) => {
	return (
	<div>
	{
		posts.map((post, i) => {
			return ( <Post 
				key={i} 
				id={posts[i].id} 
				title={posts[i].title} 
				body={posts[i].body}
				/>
			);
		})
	}
    </div>
	);
}

export default NewsFeed;