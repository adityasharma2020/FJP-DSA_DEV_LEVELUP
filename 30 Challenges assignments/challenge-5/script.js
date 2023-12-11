const modal = document.getElementsByClassName('modal')[0];
const modalCloseButton = document.getElementsByClassName('modalCloseButton')[0];
const loading = document.getElementsByClassName('loading')[0];
const gallery = document.getElementsByClassName('gallery')[0];
const modalImageContainer = document.getElementsByClassName('modalImageContainer')[0];
const previous = document.getElementsByClassName('previous')[0];
const next = document.getElementsByClassName('next')[0];

modalCloseButton.addEventListener('click', closeModal);
previous.addEventListener('click', () => changeImage('prev'));
next.addEventListener('click', () => changeImage('next'));

let images = [];
let currentModalImageIndex = -1;

const fetchAllImages = async () => {
	try {
		const response = await (
			await fetch('https://api.slingacademy.com/v1/sample-data/photos?limit=20')
		).json();
		images = response.photos;
		console.log(images);
		return addImagesToGallery(images);
	} catch (error) {
		console.log(error);
	} finally {
		closeLoader();
	}
};
fetchAllImages();

function closeLoader() {
	loading.style.display = 'none';
}

function addImagesToGallery(images) {
	images.map((image, index) => {
		const imgDiv = document.createElement('div');
		const img = document.createElement('img');

		imgDiv.classList.add('imageContainer');
		img.src = image.url;
		img.alt = image.title;

		img.addEventListener('load', () => handleImgLoad(imgDiv));
		img.addEventListener('click', () => openModal(index));
		imgDiv.appendChild(img);

		gallery.appendChild(imgDiv);
	});
}

function handleImgLoad(imgDiv) {
	imgDiv.classList.add('loaded');
}

function removeModalImage() {
	const img = modalImageContainer.querySelector('img');
	if (img) {
		img.classList.add('imageTransition');

		modalImageContainer.removeChild(img);
	}
}

function addModalImage(index) {
	currentModalImageIndex = index;
	const img = document.createElement('img');

	img.src = images[index].url;
	img.alt = images[index].title;

	modalImageContainer.appendChild(img);
}

function openModal(index) {
	console.log(index);
	addModalImage(index);
	modal.style.display = 'block';
}

function closeModal() {
	console.log(modalImageContainer);
	removeModalImage();
	modal.style.display = 'none';
}

function changeImage(direction) {
	console.log(currentModalImageIndex);

	removeModalImage();

	if (direction === 'prev') {
		currentModalImageIndex -= 1;
	} else if (direction === 'next') {
		currentModalImageIndex += 1;
	}

	console.log('after diretion check :', currentModalImageIndex);
	if (currentModalImageIndex < 0) {
		currentModalImageIndex = images.length - 1;
	} else if (currentModalImageIndex === images.length) {
		currentModalImageIndex = 0;
	}

	addModalImage(currentModalImageIndex);
}
