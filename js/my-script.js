$(document).ready(function () {
    let baseURL = 'https://api-fe-course.codethanhthuongthua.asia/api/';
    // MENU
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

    //trending left
    $.get(`${baseURL}categories_news/1/articles?limit=3`, function (data) {
        let content = '';
        data.forEach((element) => {
            content += `
            <div class="single-slider">
                <div class="trending-top mb-30">
                    <div class="trend-top-img">
                        <img src="${element.thumb}" alt="">
                        <div class="trend-top-cap">
                            <span class="bgr" data-animation="fadeInUp" data-delay=".2s"
                                data-duration="1000ms">Business</span>
                            <h2><a href="detail.html?id=${element.id}" data-animation="fadeInUp"
                                    data-delay=".4s" data-duration="1000ms">${element.title}</a></h2>
                            <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms" id="date">${element.publish_date}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
        $('.slider-active').html(content);
        mainSlider();
    });
    //trending right
    $.get(`${baseURL}categories_news/2/articles?limit=2`, function (data) {
        let content = '';
        data.forEach((element) => {
            content += `
            <div class="col-lg-12 col-md-6 col-sm-6">
                <div class="trending-top mb-30">
                    <div class="trend-top-img">
                        <img src="${element.thumb}" alt="">
                        <div class="trend-top-cap trend-top-cap2">
                            <span class="bgb">FASHION</span>
                            <h2><a href="detail.html?id=${element.id}">${element.title}</a></h2>
                            <p>${element.publish_date}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        $('#trending-right > .row').html(content);
    });
    // MOST POPULAR
    $.get(`${baseURL}categories_news/2/articles?limit=4`, function (data) {
        let content = '';
        data.forEach((element) => {
            content += `
            <div class="weekly2-single">
            <div class="weekly2-img">
                <img src="${element.thumb}" alt="">
            </div>
            <div class="weekly2-caption">
                <h4><a href="detail.html?id=${element.id}">${element.title}</a>
                </h4>
                <p>${element.publish_date}</p>
            </div>
            </div>`;
        });
        $('#MostPopular').html(content);
        $('.weekly2-news-active').slick({
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            loop: true,
            slidesToShow: 3,
            prevArrow:
                '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
            nextArrow:
                '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    //WEEKLY NEWS
    $.get(`${baseURL}categories_news/3/articles?limit=5`, function (data) {
        let content = '';
        data.forEach((element) => {
            content += `
            <div class="weekly3-single">
            <div class="weekly3-img">
                <img src="${element.thumb}" alt="">
            </div>
            <div class="weekly3-caption">
                <h4><a href="detail.html?id=${element.id}">${element.title}</a></h4>
                <p>${element.publish_date}</p>
            </div>
            </div>`;
        });
        $('#weekly-news').html(content);
        $('.weekly3-news-active').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            loop: true,
            slidesToShow: 4,
            prevArrow:
                '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
            nextArrow:
                '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });
    //What News
    // $.get(`${baseURL}categories_news/2/articles`, function (dataCategories) {
    //     let contentCategories = '';
    //     dataCategories.forEach((categoryItem, index) => {
    //         contentCategories += `   
    //                 <a class="nav-item nav-link ${index == 0 ? 'active' : ''}" id="nav-${
    //             categoryItem.slug
    //         }-tab" data-toggle="tab"
    //                     href="#nav-${categoryItem.slug}" role="tab" aria-controls="nav-${
    //             categoryItem.slug
    //         }"
    //                     aria-selected="${index == 0 ? 'true' : 'false'}">${
    //             categoryItem.name
    //         }</a>    `;

    //         $.get(`${baseURL}/${categoryItem.id}/articles?limit=4`, function (dataArticles) {
    //             let contentArticles = '';
    //             dataArticles.forEach((articleItem) => {
    //                 contentArticles += `
    //                     <div class="col-lg-6 col-md-6 col-sm-10">
    //                         <div class="whats-right-single mb-20">
    //                             <div class="whats-right-img">
    //                                 <img src="${articleItem.thumb}" alt="">
    //                             </div>
    //                             <div class="whats-right-cap">
    //                                 <span class="colorb">FASHION</span>
    //                                 <h4><a href="latest_news.html">${articleItem.title}</a></h4>
    //                                 <p>${articleItem.publish_date}</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     `;
    //             });
    //             contentArticles = `
    //             <div class="tab-pane fade show ${index == 0 ? 'active' : ''}" id="nav-${
    //                 categoryItem.slug
    //             }" role="tabpanel" aria-labelledby="nav-${categoryItem.slug}-tab">
    //                 <div class="row">
    //                     ${contentArticles}
    //                 </div>
    //             </div>
    //             `;
    //             $('#whats-new-content').append(contentArticles);
    //         });
    //     });
    //     $('#whats-new').html(contentCategories);
    // });

    // $.get(`${baseURL}categories_news/3/articles`, function (dataCategories) {
    //     let contentCategories = '';
    //     dataCategories.forEach((categoryItem, index) => {
    //     contentCategories += `
    //             <a class="nav-item nav-link ${index == 0 ? 'active' : ''}" id="nav-${categoryItem.slug}-tab" data-toggle="tab"
    //                 href="#nav-${categoryItem.slug}" role="tab" aria-controls="nav-${categoryItem.slug}"
    //                 aria-selected="${index == 0 ? 'true' : 'false'}">${categoryItem.name}</a>    `;

    //     $.get(`${baseURL}categories_news/${categoryItem.id}/articles?limit=5`, function(data) {
    //         let singlePostContentLeft = '';
    //         let singlePostContentRight = '';

    //         data.forEach((item, index) => {

    //             if (index == 0) {
    //                 singlePostContentLeft = `
    //                     <div class="whats-news-single mb-40 mb-40">
    //                         <div class="whates-img">
    //                             <img src="${item.thumb}" alt="">
    //                         </div>
    //                         <div class="whates-caption">
    //                             <h4><a href="detail.html?id=${item.id}">${item.title}</a></h4>
    //                             <span>${item.publish_date}</span>
    //                             <p>${item.description}</p>
    //                         </div>
    //                     </div>
    //             `;
    //             } else {
    //                 singlePostContentRight += `
    //                     <div class="whats-right-single mb-20">
    //                         <div class="whats-right-img">
    //                             <img src="${item.thumb}" alt="">
    //                         </div>
    //                         <div class="whats-right-cap">
    //                             <span class="colorb">FASHION</span>
    //                             <h4><a href="detail.html?id=${item.id}">${item.title}</a></h4>
    //                             <p>${item.publish_date}</p>
    //                         </div>
    //                     </div>
    //             `;
    //             }
    //         });

    //         $('#left-content').append(singlePostContentLeft);
    //         $('#right-content').append(singlePostContentRight);
    //     });
    // });
    // });

    // FUNCTION
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find(
                '[data-animation]'
            );
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 3500,
            dots: false,
            fade: true,
            arrows: false,
            prevArrow:
                '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
            nextArrow:
                '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
            ],
        });

        function doAnimations(elements) {
            var animationEndEvents =
                'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay,
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
});
