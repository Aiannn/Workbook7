function populateCard(data) {
    let image = document.querySelector('#image')
    image.src = data[0].flags.png
    let title = document.querySelector('#title')
    title.textContent = data[0].name.common
    // let currency = document.querySelector('#currency')
    // currency.textContent = 'Currency: '+ data[0].currencies.USD.name
    let capital = document.querySelector('#capital')
    capital.textContent = 'Capital: ' + data[0].capital
    let population = document.querySelector('#population')
    population.textContent = 'Population: '+ data[0].population
    let continent = document.querySelector('#continents')
    continent.textContent = 'Continent: ' + data[0].continents[0]
} 

async function submitHandler() {
    let inputValue = document.querySelector('#input-country').value

    let promise = fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
    let response = await promise;
    let data = await response.json()
    console.log(data)
    console.log(data[0].name.common)
    populateCard(data)
}