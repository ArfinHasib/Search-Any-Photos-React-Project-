import axios from 'axios';

const searchImages = async (term) => {
	const response = await axios.get(
		'https://api.unsplash.com/search/photos',
		{
			headers: {
				Authorization:
					'Client-ID _9Q5IJfQK-98PYFr8WO2wHuvGfP2qkFNuMiusBHXiUE',
			},
			params: {
				query: term,
			},
		}
	);
	return response.data.results;
};

export default searchImages;
