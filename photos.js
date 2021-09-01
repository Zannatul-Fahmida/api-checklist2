function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => showPhotos(data))
}
loadPhotos();
function showPhotos(photos){
    const photosContainer = document.getElementById('photos');
    photos.forEach(photo =>{
        const div = document.createElement('div');
        div.innerHTML = `
        <img onclick="loadDetails(${photo.id})" src="${photo.url}" class="img">
        `;
        photosContainer.appendChild(div);
    })
}
function loadDetails(photoId) {
    const url = `https://jsonplaceholder.typicode.com/photos/${photoId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data))
}
function showDetails(details){
    const photoDetails = document.getElementById('details');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${details.url}" class="img">
    <img src="${details.thumbnailUrl}" class="img">
    `;
    photoDetails.appendChild(div);
}