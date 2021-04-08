
$(document).ready(function(){
    let urlMnenu = 'http://api.zdemo.xyz/api/categories_news?limit=4';
    let urlTrending1 = 'http://api.zdemo.xyz/api/categories_news/1/articles?limit=3';
    let urlTrending2 = 'http://api.zdemo.xyz/api/categories_news/2/articles?limit=1';
    let urlTrending3 = 'http://api.zdemo.xyz/api/categories_news/3/articles?limit=1';

    $.get( urlMnenu, function(data) {
        let content = '';
        data.forEach(element => {
            content += `<li><a href="#">${element.name}</a></li>`;
        });
        $('#navigation').html(content);
    });
    
    
    $.get( urlTrending1, function(data) {
        let content = '';
        data.forEach(element => {
            content += ` <div class="single-slider">
                            <div class="trending-top mb-30">
                                <div class="trend-top-img">
                                    <img src=" images/trending/trending_top2.jpg" alt="">
                                    <div class="trend-top-cap">
                                        <span class="bgr" data-animation="fadeInUp" data-delay=".2s"
                                            data-duration="1000ms">Business</span>
                                        <h2><a href="latest_news.html" data-animation="fadeInUp"
                                                data-delay=".4s" data-duration="1000ms">${element.title}</a></h2>
                                        <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms" id="date">${element.publish_date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`
        }); 
        $('.slider-active').html(content);
    });

    $.get( urlTrending2, function(data) {
        let content = '';
        data.forEach(element => {
            content += `<div class="row">
                            <div class="col-lg-12 col-md-6 col-sm-6">
                                <div class="trending-top mb-30">
                                    <div class="trend-top-img">
                                        <img src=" images/trending/trending_top3.jpg" alt="">
                                        <div class="trend-top-cap trend-top-cap2">
                                            <span class="bgb">FASHION</span>
                                            <h2><a href="latest_news.html">${element.title}</a></h2>
                                            <p>${element.publish_date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6 col-sm-6">
                                <div class="trending-top mb-30">
                                    <div class="trend-top-img">
                                        <img src=" images/trending/trending_top4.jpg" alt="">
                                        <div class="trend-top-cap trend-top-cap2">
                                            <span class="bgg">TECH </span>
                                            <h2><a href="latest_news.html">${element.title}</a></h2>
                                            <p>${element.publish_date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        });
        $('#top-right').html(content);


    });
    

  })