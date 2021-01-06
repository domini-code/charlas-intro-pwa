const API_URL = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2969754bc52865ea520fa0bdfa979d7a&hash=78f5f6452549771ab88981a4c55acf80';


export const loadCharacters = async ()=> {
  const result = await fetch(API_URL);
  const dataJson = await result.json();
  const { results } = dataJson.data;
  generatedCards(results);
}

const generatedCards = (heros)=> {
  if (!heros) return;
  const container = document.querySelector('#marvel-container');
  let contentHTML = '';

  for (const hero of heros) {
    let urlHero = hero.urls[0].url;
    contentHTML += `
    <div class="col-sm-12 col-md-4 col-lg-3 mt-1">
      <div class="card bg-primary">
          <a href="${urlHero}" target="_blank">
            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
          </a>
        <h3 class="bg-primary d-none d-sm-block">${hero.name}</h3>
      </div> 
    </div>`;
  }
  container.innerHTML = contentHTML;
  document.getElementById('loader').innerHTML = '';
}