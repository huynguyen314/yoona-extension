function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function renderImage(imageData) {
  document.getElementById('image-wrap').href = imageData.url;
  document.getElementById('image').src = imageData.fixed_height_small_url;
}

async function getYoonaUrl() {
  let url = 'https://api.giphy.com/v1/gifs/random?api_key=14d9bfd07fc34221938cae36eb5aefdf&tag=yoona';
  let result = await fetch(url);
  let jsonResult = await result.json();
  return jsonResult.data;
}

document.addEventListener('DOMContentLoaded', async () => {
  renderStatus('Finding Yoona ...');
  var imageData = await getYoonaUrl();
  renderStatus('');
  renderImage(imageData);
});
