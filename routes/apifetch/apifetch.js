var fetch=require('node-fetch');
function apifetch(apistring){


fetch(apistring);
};
    

console.log(apifetch('https://newsapi.org/v2/top-headlines?country=ar&apiKey=e4e664afac414cda8aca36b4d97046aa'));