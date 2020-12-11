import React from 'react';
import '../containers/App.css';
import classes from './Main.module.css';

const NewPost = ( {title, body, titleChange, bodyChange, submitPost} ) => {
	const [open, setOpen] = React.useState(false);

	return (
		<div>
			<button onClick={() => {
				setOpen(!open);
			}}
			>
			New Post
			</button>
			<nav className={open ? 'open' : null}>
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
			</nav>
		</div>
	);
}


export default NewPost;