import React from 'react';
import classes from './Main.module.css';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa3'>
			<input 
				className={classes.Search}
				type='search'
				placeholder='Search News Feed'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;