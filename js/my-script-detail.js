$(document).ready(function () {
    let baseURL = 'https://api-fe-course.codethanhthuongthua.asia/api/';

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let c = url.searchParams.get("id");

    $.get(`${baseURL}categories_news`, function (data) {
        let content = '<li class="menu-active"><a href="index.html">Trang Chủ</a></li>';
        if (data.length < 5) {
            data.forEach((item) => {
                content += `<li><a href="category.html?id=${item.id}">${item.name}</a></li>`;
            });
        } else {
            for (let index = 0; index <= 2; index++) {
                content += `<li><a href="category.html?id=${data[index].id}">${data[index].name}</a></li>`;
            }

            content += `
            <li><a href="#">Danh mục khác</a>
               <ul class="submenu">
            `;

            for (let index = 3; index < data.length; index++) {
                content += `<li><a href="category.html?id=${data[index].id}">${data[index].name}</a></li>`;
            }

            content += `</ul></li>`;
        }

        $('#navigation').html(content);
    });

    //Lấy nội dung chi tiết của bài viết
    $.get(`${baseURL}articles/${c}`, function (data) {
        let contentNews = '';
        console.log(data);
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

        //Lấy các bài viết cùng chuyên mục
        let category = data.category_id;
        $.get(`${baseURL}categories_news/${category}/articles`, function (data) {
            let contentRelatedPost = '<h3 class="widget_title">Bài viết liên quan</h3>';
            data.forEach((element) => {
                contentRelatedPost += `
                <div class="media post_item">
                  <img src="${element.thumb}" alt="post">
                  <div class="media-body">
                      <a href="detail.html?id=${element.id}">
                        <h3>${element.title}</h3>
                      </a>
                      <p>${element.publish_date}</p>
                  </div>
                </div>`;
            });
            $('#related-post').html(contentRelatedPost);
        });
    });
});
