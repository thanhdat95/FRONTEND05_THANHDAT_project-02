$(document).ready(function () {
   let baseURL ='https://api-fe-course.codethanhthuongthua.asia/api/';
   
   let url_string = window.location.href; //window.location.href
   let url = new URL(url_string);
   let c = url.searchParams.get("id");
   
   //Lấy nội dung chi tiết của bài viết
   $.get(`${baseURL}articles/2`, function (data) {
      let contentNews = '';
         contentNews += `
         <div class="feature-img">
            <img class="img-fluid" src="${data.thumb}" alt="">
         </div>
         <div class="blog_details">
            <h2>${data.title}</h2>
            <ul class="blog-info-link mt-3 mb-4">
               <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
               <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
            </ul>
            <p class="excert">${data.description}</p>
            <div class="quote-wrapper">
               <div class="quotes">${data.content}</div>
            </div>
         </div>
         `;
      $('#detail-news').html(contentNews); 
   });

   //Lấy các bài viết cùng chuyên mục
   $.get(`${baseURL}categories_news/2/articles`, function (data) {
      let contentRelatedPost = '';
      data.forEach(element => {
         contentRelatedPost += `
            <div class="media post_item">
               <img src="${element.thumb}" alt="post">
               <div class="media-body">
                  <a href="single-blog.html">
                     <h3>${element.title}</h3>
                  </a>
                  <p>${element.publish_date}</p>
               </div>
            </div>`;
      });
      $('#related-post').html(contentRelatedPost);
   });   
});

