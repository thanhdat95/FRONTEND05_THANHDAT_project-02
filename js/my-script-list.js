$(document).ready(function () {
    let baseURL ='https://api-fe-course.codethanhthuongthua.asia/api/';

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let c = url.searchParams.get("id");
    
    $.get(`${baseURL}categories_news/3/articles?limit=6`, function (data) {
        
       let contentList = '';
       data.forEach((item) => {
        contentList += `
            <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="whats-news-single mb-40 mb-40">
                    <div class="whates-img">
                        <img src="${item.thumb}" alt="">
                    </div>
                    <div class="whates-caption whates-caption2">
                        <h4><a href="#">${item.title}</a></h4>
                        <span>${item.publish_date}</span>
                        <p>${item.description}</p>
                    </div>
                </div>
            </div>
        `;
       $('#nav-tabContent .row').html(contentList); 
       });
    });
});