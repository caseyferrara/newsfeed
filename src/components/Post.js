import React from 'react';
import classes from './Newsfeed.module.css';
import 'tachyons';
const Post = ({ title, body, id }) => {
	return (
		<div className={classes.Wrapper}>
			<img className={classes.Image}alt='post' src={`https://picsum.photos/200?random=${id}`}/>
			<div>
			<h2 className={classes.Title}>{title}</h2>
			<p className={classes.Body}>{body}</p>
			</div>
		</div>
	);
}

export default Post;