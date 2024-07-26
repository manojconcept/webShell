const countryApi = `https://restcountries.com/v3.1/all`;

const contryName = prompt("enter country name :").trim();

const countryApiN = `https://restcountries.com/v3.1/name/${contryName}`;

function countryResult(param){
    console.log(param);
    // return param
    return param;
}


fetch(countryApiN).then(res=>res.json()).then(
    data=>console.log(countryResult(data))
).catch(error => console.error(error))

