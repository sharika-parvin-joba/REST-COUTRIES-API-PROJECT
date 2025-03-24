const countryName=new URLSearchParams(location.search).get('name');
const flagImage= document.querySelector('.country-details img')
const countryNameH1= document.querySelector('.country-details h1')
const nativeName=document.querySelector('.native-name');
const population=document.querySelector('.population');
const region=document.querySelector('.region');
const subRegion=document.querySelector('.sub-region');
const capital=document.querySelector('.capital');
const domain=document.querySelector('.domain');
const currencies=document.querySelector('.currency');
const languages=document.querySelector('.language');


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then(res=>res.json())
.then(([country])=>{
    console.log(country)
    flagImage.src=country.flags.svg
    countryNameH1.innerText=country.name.common;
    population.innerText=country.population.toLocaleString('en-IN');
    region.innerText=country.region;
    
   
    domain.innerText=country.tld.join(', ');
   
    if(country.subregion){
        subRegion.innerText=country.subregion;
    }

    if(country.name.nativeName){
        //console.log(Object.values(country.name.nativeName)[0].common); 
      nativeName.innerText=Object.values(country.name.nativeName)[0].common;
    }
    else{
        nativeName.innerText=country.name.common;
    }

    if(country.currencies){
        currencies.innerText=Object.values(country.currencies).map((currency)=>currency.name).join(', ');
    }

    if(country.capital){
        capital.innerText=country.capital?.[0];
    }

    if(country.languages){
        languages.innerText=Object.values(country.languages).join(", ")
    }
})