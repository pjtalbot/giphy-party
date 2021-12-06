console.log("Let's get this party started!");

const $gifArea = $('#gif-area');
const $searchInput = $('#search');

$('form').on('submit', async function(e) {
	e.preventDefault();

	let searchTerm = $searchInput.val();
	$searchInput.val('');

	const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params: {
			q: searchTerm,
			api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
		}
	});
	console.log(response);
	addGif(response.data);
});

function addGif(result) {
	let numResults = result.data.length;
	if (numResults) {
		let randomIdx = Math.floor(Math.random() * numResults);
		let $newCol = $('<div>', { class: 'col-md-4 col-12 mb-4' });
		let $newGif = $('<img>', {
			src: result.data[randomIdx].images.original.url,
			class: 'w-100'
		});
		$newCol.append($newGif);
		$gifArea.append($newCol);
	} else {
		alert('Search found No Results');
	}
}
$('#delete').on('click', function() {
	$gifArea.empty();
});
