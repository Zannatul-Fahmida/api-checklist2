const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
    document.getElementById('search-result').style.visibility = displayStyle;
}
const searchCocktail = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    //displaySpinner
    toggleSpinner('block');
    toggleSearchResult('hidden');
    //Clear input field
    searchField.value = '';
    if (searchText == '') {
        alert('Please give a text to search');
    }
    else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.drinks))
    }
}
const displaySearchResult = drinks => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(!drinks){
        const h2 = document.createElement('h2');
        h2.innerText = 'No Result';
        searchResult.appendChild(h2);
    }
    drinks?.forEach(drink => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadDetails(${drink.idDrink})" class="card h-100">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${drink.strDrink}</h5>
                  <p class="card-text">${drink.strInstructions.slice(0, 250)}</p>
                  <p class="card-text"><small class="text-muted">${drink.strTags ? drink.strTags : ''}</small></p>
                </div>
              </div>
        `;
        searchResult.appendChild(div);
    });
    toggleSpinner('none');
    toggleSearchResult('visible');
}
const loadDetails = drinkId => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.drinks[0]))
}
const showDetails = details => {
    const drinkDetails = document.getElementById('drink-details');
    drinkDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('row');
    div.classList.add('g-0');
    div.innerHTML = `
    <div class="col-md-4">
                <img src="${details.strDrinkThumb}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${details.strDrink}</h5>
                  <p class="card-text">${details.strInstructions.slice(0, 100)}</p>
                  <p class="card-text"><small class="text-muted">${details.strCategory}</small></p>
                </div>
              </div>
    `;
    drinkDetails.appendChild(div);
}
