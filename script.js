const countriesContainer=document.querySelector(".countries-container")
const filterByRegion=document.querySelector('.filter-by-region');
const searchInput=document.querySelector('.search-container input')
const themeChanger=document.querySelector('.theme-changer')

let allCountriesData;

const allCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(renderCountries)
}

allCountries();

filterByRegion.addEventListener('change', (e)=>{
console.log(e.target.value);
fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
.then(res=>res.json())
.then(renderCountries)
})

searchInput.addEventListener('input',(e)=>{
    console.log(e.target.value)
console.log(allCountriesData)
const filterCountries=allCountriesData.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
console.log(filterCountries)
renderCountries(filterCountries);
})


function renderCountries(data){
    countriesContainer.innerHTML='';
    data.forEach((country)=>{

        const countriesContainer=document.querySelector(".countries-container")
        const countryCard=document.createElement('a');
        countryCard.classList.add('country-card')
        countryCard.href=`/country.html?name=${country.name.common}`
        
        const cardHTML=`
        <img src="${country.flags.svg}" alt="flag">
                   <div class="card-text">
                    <h3 class="card-title">${country.name.common}</h3>
                    <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
                    <p><b>Region:</b> ${country.region}</p>
                    <p><b>Capital:</b>  ${country.capital?.[0]}</p>
                   </div>
        `
        
        countryCard.innerHTML=cardHTML
        countriesContainer.append(countryCard)
        allCountriesData=data;
    })
}

themeChanger.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
})