import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa3'>
			<input 
				className='pa3 ba br3 bg-lightest-blue'
				type='search'
				placeholder='Search News Feed'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;