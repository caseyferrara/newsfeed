import React from 'react';
import classes from './Main.module.css';

const NewPost = ( {title, body, titleChange, bodyChange, submitPost} ) => {
	return (
		<div className={classes.Main}>
			<input 
				className={classes.TitleInput}
				type='text'
				placeholder='Post Title'
				onChange={titleChange}
			/>
			<input 
				className={classes.BodyInput}
				type='text'
				placeholder='Post Description'
				onChange={bodyChange}
				contenteditable='true'
			/>
			<button onClick={submitPost} className={classes.Button} type='submit'>Add</button>
		</div>
	);
}


export default NewPost;