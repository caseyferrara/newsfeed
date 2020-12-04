import React from 'react';
import 'tachyons';
const Post = ({ title, body, id }) => {
	return (
		<div className='tc bg-lightest-blue dib br3 pa2 ma2 mw8 grow'>
			<img className='br-100 h5 w5'alt='post' src={`https://picsum.photos/200?random=${id}`}/>
			<div>
			<h2 className='blue mt0'>{title}</h2>
			<p className='black-70 f6'>{body}</p>
			</div>
		</div>
	);
}

export default Post;