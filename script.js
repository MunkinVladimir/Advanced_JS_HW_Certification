function addReview() {
	const productName = document.getElementById('product-name').value;
	const reviewText = document.getElementById('review-text').value;

	if (productName && reviewText) {
		const review = { productName, reviewText };
		let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
		reviews.push(review);
		localStorage.setItem('reviews', JSON.stringify(reviews));
		displayReviews();
		document.getElementById('product-name').value = '';
		document.getElementById('review-text').value = '';
	} else {
		alert('Пожалуйста, заполните все поля!');
	}
}

function displayReviews() {
	const reviewsContainer = document.querySelector('.reviews');
	reviewsContainer.innerHTML = '';

	let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

	reviews.forEach((review, index) => {
		const reviewItem = document.createElement('div');
		reviewItem.classList.add('review-item');
		reviewItem.innerHTML = `
      <h3 class="review-product">${review.productName}</h3>
      <p>${review.reviewText}</p>
      <button onclick="deleteReview(${index})">Удалить</button>
`;
		reviewsContainer.appendChild(reviewItem);
		let newReview = document.querySelector('.review-product');
	});
}

function deleteReview(index) {
	let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
	reviews.splice(index, 1);
	localStorage.setItem('reviews', JSON.stringify(reviews));
	displayReviews();
}

displayReviews();
