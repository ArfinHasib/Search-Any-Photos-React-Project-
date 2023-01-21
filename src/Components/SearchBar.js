import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState('');

	function handleFormSubmit(event) {
		event.preventDefault();

		onSubmit(term);
	}

	const handleChange = (event) => {
		setTerm(event.target.value);
	};

	return (
		<div className='search-bar'>
			<form onSubmit={handleFormSubmit}>
				<label>Search for Photos</label>
				<input value={term} onChange={handleChange} />
			</form>
		</div>
	);
}

export default SearchBar;
