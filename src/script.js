const apiUrl = 'https://api.sampleapis.com/codingresources/codingResources';
const dataContainer = document.getElementById('data-container');
let dataArrays = [];

async function getData() {
  try {
    const response = await fetch(apiUrl);
    dataArrays = await response.json();
    console.log(dataArrays);
    displayData();
  } catch(error) {
    console.log(error);
  }
}

function displayData() {
  dataArrays.forEach((data)=>{
    const item = document.createElement('div');
    item.setAttribute('class', 'max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4');
    item.innerHTML = `<b>Blog. ${data.id} <br><br> ${data.description}</b>`;

    const levels = document.createElement('p');
    levels.setAttribute('class', 'text-sm py-2');
    levels.innerHTML = data.levels;

    const topics = document.createElement('p');
    topics.setAttribute('class', 'text-sm pt-2');
    topics.innerHTML = data.topics;

    const urlContainer = document.createElement('div');
    urlContainer.setAttribute('class', 'text-wrap');
    const urlLink = document.createElement('a');
    urlLink.setAttribute('href', data.url);
    urlLink.innerHTML = `URL: ${data.url}`;

    urlContainer.appendChild(urlLink);

    item.appendChild(topics);
    item.appendChild(levels);
    item.appendChild(urlContainer);
    dataContainer.appendChild(item);
  });
}

getData();

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    getData();
  }
})