// fetch the BBC API And set posts
var x = 1;
function mahmoud() {
if(x==1){
document.getElementById("aaa").innerHTML = "unfollow";
x=2;
}
else{
  document.getElementById("aaa").innerHTML = "follow";
  x=1;
}

} 


fetch('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=e4e664afac414cda8aca36b4d97046aa').then((data)=>{
return data.json();
    })
 .then((result)=>{
document.getElementById('post1bbc').innerHTML=`<div class="single-blog-post featured-post">
    <div class="post-thumb">
        <a href="${result.articles[0].url}" target="_blank"><img src="${result.articles[0].urlToImage}"" alt=""></a>
    </div>
    <div class="post-data">
        <a href="#" class="post-catagory">ABC</a>
        <a href="${result.articles[0].url}" target="_blank" class="post-title">
            <h6>${result.articles[0].title}"</h6>
        </a>
        <div class="post-meta">
            <p class="post-author">By <a href="#">${result.articles[0].author}"</a></p>
            <p class="post-excerp">${result.articles[0].content}" </p>
            <!-- Post Like & Post Comment -->
        </div>
    </div>
</div>`
//end of post1bbc
//post2bbc
document.getElementById('post2bbc').innerHTML=`<div class="single-blog-post featured-post-2">
    <div class="post-thumb">
        <a href="${result.articles[1].url} target="_blank""><img src="${result.articles[1].urlToImage}" alt=""></a>
    </div>
    <div class="post-data">
        <a href="#" class="post-catagory">ABC</a>
        <div class="post-meta">
            <a href="${result.articles[1].url}" target="_blank" class="post-title">
                <h6>${result.articles[1].title}</h6>
            </a>
            <!-- Post Like & Post Comment -->

        </div>
    </div>
</div>`
//end of post2bbc
//startofpost3bbc
document.getElementById('post2bbc').innerHTML+=`<div class="single-blog-post featured-post-2">
    <div class="post-thumb">
        <a href="${result.articles[2].url}" target="_blank"><img src="${result.articles[2].urlToImage}" alt=""></a>
    </div>
    <div class="post-data">
        <a href="#" class="post-catagory">ABC</a>
        <div class="post-meta">
            <a href="${result.articles[2].url}" target="_blank" class="post-title">
                <h6>${result.articles[2].title}</h6>
            </a>
            <!-- Post Like & Post Comment -->

        </div>
    </div>
</div>`
});
//arc API

fetch('https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey=e4e664afac414cda8aca36b4d97046aa').then((data)=>{
return data.json();
    })
 .then((result)=>{
   //start of post1arc
   document.getElementById('post1arc').innerHTML=`<div class="single-blog-post featured-post">
       <div class="post-thumb">
             <a href="${result.articles[0].url}" target="_blank"><img src="${result.articles[0].urlToImage}"" alt=""></a>
       </div>
       <div class="post-data">
           <a href="#" class="post-catagory">ARC</a>
           <a href="${result.articles[0].url}" target="_blank" class="post-title">
               <h6>${result.articles[0].title}"</h6>
           </a>
           <div class="post-meta">
               <p class="post-author">By <a href="#">${result.articles[0].author}"</a></p>
               <p class="post-excerp">${result.articles[0].content}" </p>
               <!-- Post Like & Post Comment -->
           </div>
       </div>
   </div>`
//end of post1arc
//start of post2arc
document.getElementById('post2arc').innerHTML=`<div class="single-blog-post featured-post-2">
    <div class="post-thumb">
        <a href="${result.articles[1].url} target="_blank""><img src="${result.articles[1].urlToImage}" alt=""></a>
    </div>
    <div class="post-data">
        <a href="#" class="post-catagory">ARC</a>
        <div class="post-meta">
            <a href="${result.articles[1].url}" target="_blank" class="post-title">
                <h6>${result.articles[1].title}</h6>
            </a>
            <!-- Post Like & Post Comment -->

        </div>
    </div>
</div>`
//end of post2arc
//start of post3arc
document.getElementById('post2arc').innerHTML+=`<div class="single-blog-post featured-post-2">
    <div class="post-thumb">
        <a href="${result.articles[2].url} target="_blank""><img src="${result.articles[2].urlToImage}" alt=""></a>
    </div>
    <div class="post-data">
        <a href="#" class="post-catagory">ARC</a>
        <div class="post-meta">
            <a href="${result.articles[2].url}" target="_blank" class="post-title">
                <h6>${result.articles[2].title}</h6>
            </a>
            <!-- Post Like & Post Comment -->

        </div>
    </div>
</div>`

 });
 //end of arc api
 //start of bbcsports api
 fetch('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=e4e664afac414cda8aca36b4d97046aa').then((data)=>{
 return data.json();
     })
  .then((result)=>{
 document.getElementById('post1bbcsports').innerHTML=`<div class="single-blog-post style-3">
           <div class="post-thumb">
               <a href="${result.articles[0].url}" target="_blank" ><img src="${result.articles[0].urlToImage}" alt=""></a>
           </div>
           <div class="post-data">
               <a href="#" class="post-catagory">BBCSPORTS</a>
               <a href="${result.articles[0].url}" target="_blank" class="post-title">
                   <h6>${result.articles[0].title}</h6>
               </a>

           </div>
       </div>`
       //end of post1bbcsports
       // start of  post2bbcsports
       document.getElementById('post2bbcsports').innerHTML=`<div class="single-blog-post style-3">
                 <div class="post-thumb">
                     <a href="${result.articles[1].url}" target="_blank"><img src="${result.articles[1].urlToImage}" alt=""></a>
                 </div>
                 <div class="post-data">
                     <a href="#" class="post-catagory">BBCSPORTS</a>
                     <a href="${result.articles[1].url}" target="_blank" class="post-title">
                         <h6>${result.articles[1].title}</h6>
                     </a>

                 </div>
             </div>`
             //end of postbbcsports2
             //start of postbbcsports3
             document.getElementById('post3bbcsports').innerHTML=`  <div class="single-blog-post style-3">
                   <div class="post-thumb">
                       <a href="${result.articles[2].url}" target="_blank"><img src="${result.articles[2].urlToImage}" alt=""></a>
                   </div>
                   <div class="post-data">
                       <a href="#" class="post-catagory">BBCSPORTS</a>
                       <a href="${result.articles[2].url}" target="_blank" class="post-title">
                           <h6>${result.articles[2].title}</h6>
                       </a>

                   </div>
               </div>`
               //end of postbbcsports3
               //start of postbbcsports4
               document.getElementById('post4bbcsports').innerHTML=`  <div class="single-blog-post style-3">
                     <div class="post-thumb">
                         <a href="${result.articles[3].url}" target="_blank"><img src="${result.articles[3].urlToImage}" alt=""></a>
                     </div>
                     <div class="post-data">
                         <a href="#" class="post-catagory">BBCSPORTS</a>
                         <a href="${result.articles[3].url}" target="_blank" class="post-title">
                             <h6>${result.articles[3].title}</h6>
                         </a>

                     </div>
                 </div>`



     });
     //end of BBCSports Api
     //start of businessinsider api
     fetch('https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=e4e664afac414cda8aca36b4d97046aa').then((data)=>{
     return data.json();
         })
      .then((result)=>{
document.getElementById('post1business').innerHTML=`<div class="single-blog-post">
    <div class="post-thumb">
        <a href="${result.articles[0].url}" target="_blank"><img src="${result.articles[0].urlToImage}" alt=""></a>
    </div>
    <div class="post-data">
        <a href="${result.articles[0].url}" target="_blank" class="post-title">
            <h6>${result.articles[0].title}</h6>
        </a>
        <div class="post-meta">
            <div class="post-date"><a href="#">${result.articles[0].publishedAt}</a></div>
        </div>
    </div>
</div>`
//end of post1business
//start of post2business
document.getElementById('post2business').innerHTML=`<div class="single-blog-post">
    <div class="post-thumb">
        <a href="${result.articles[1].url}" target="_blank"><img src="${result.articles[1].urlToImage}" alt=""></a>
    </div>
    <div class="post-data">
        <a href="${result.articles[1].url}" target="_blank" class="post-title">
            <h6>${result.articles[1].title}</h6>
        </a>
        <div class="post-meta">
            <div class="post-date"><a href="#">${result.articles[1].publishedAt}</a></div>
        </div>
    </div>
</div>`
//end of post2business
//start of post3business
document.getElementById('post3business').innerHTML=`<div class="single-blog-post">
    <div class="post-thumb">
        <a href="${result.articles[2].url}" target="_blank"><img src="${result.articles[2].urlToImage}" alt=""></a>
    </div>
    <div class="post-data">
        <a href="${result.articles[2].url}" target="_blank" class="post-title">
            <h6>${result.articles[2].title}</h6>
        </a>
        <div class="post-meta">
            <div class="post-date"><a href="#">${result.articles[2].publishedAt}</a></div>
        </div>
    </div>
</div>`
//end of post3business
//start of post4business
document.getElementById('post4business').innerHTML=`<div class="single-blog-post">
    <div class="post-thumb">
        <a href="${result.articles[3].url}" target="_blank"><img src="${result.articles[3].urlToImage}" alt=""></a>
    </div>
    <div class="post-data">
        <a href="${result.articles[3].url}" target="_blank" class="post-title">
            <h6>${result.articles[3].title}</h6>
        </a>
        <div class="post-meta">
            <div class="post-date"><a href="#">${result.articles[3].publishedAt}</a></div>
        </div>
    </div>
</div>`
//end of post4business
//start of post5business
document.getElementById('post5business').innerHTML=`<div class="single-blog-post">
    <div class="post-thumb">
        <a href="${result.articles[4].url}" target="_blank"><img src="${result.articles[4].urlToImage}" alt=""></a>
    </div>
    <div class="post-data">
        <a href="${result.articles[4].url}" target="_blank" class="post-title">
            <h6>${result.articles[4].title}</h6>
        </a>
        <div class="post-meta">
            <div class="post-date"><a href="#">${result.articles[4].publishedAt}</a></div>
        </div>
    </div>
</div>`
//end of post5business
//start of post6business
document.getElementById('post6business').innerHTML=`<div class="single-blog-post">
    <div class="post-thumb">
        <a href="${result.articles[5].url}" target="_blank"><img src="${result.articles[5].urlToImage}" alt=""></a>
    </div>
    <div class="post-data">
        <a href="${result.articles[5].url}" target="_blank" class="post-title">
            <h6>${result.articles[5].title}</h6>
        </a>
        <div class="post-meta">
            <div class="post-date"><a href="#">${result.articles[5].publishedAt}</a></div>
        </div>
    </div>
</div>`
      });
