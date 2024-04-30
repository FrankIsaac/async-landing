const API = 'https://youtube-v31.p.rapidapi.com/search?q=Documental%20%20Las%20Mentes%20M%C3%A1s%20Brillantes%20del%20Mundo%20&part=snippet%2Cid&regionCode=US&maxResults=9&order=date';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e615ba7933msh17a261de5b82be8p130e77jsnc44a862c36c8',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
	const data = await response.json();
	return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
        
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
      console.log(error);        
    }
})();

/*
const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCFmMw7yTuLTCuMhpZD5dVsg&part=snippet%2Cid&order=date&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e615ba7933msh17a261de5b82be8p130e77jsnc44a862c36c8',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/





