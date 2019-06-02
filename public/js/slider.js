alert('from slider');
fetch('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=e4e664afac414cda8aca36b4d97046aa').then((data)=>{
return data.json();
    })
 .then((result)=>{
 	for(var i =0;i<1;i++)
 	{


 		// var btn = document.createElement("LI");
 		// btn.innerHTML = "CLICK ME";

 		// 	document.getElementById('go').appendChild(btn);
 		// 	console.log(result.articles[i].title);

 	}
 	document.getElementById('go').innerHTML=
 });