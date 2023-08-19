function showImage(imageUrl) {
  const popup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  
  popupImage.src = imageUrl;
  popup.style.display = 'block';
}

function hideImage() {
  const popup = document.getElementById('image-popup');
  popup.style.display = 'none';
}
