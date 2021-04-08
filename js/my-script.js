$(document).ready(function () {
    let apiMenu = 'http://api.zdemo.xyz/api/categories_news?limit=4';
    let apiTrendingLeft = 'http://api.zdemo.xyz/api/categories_news/1/articles?limit=3';
    let apiTrendingRight = 'http://api.zdemo.xyz/api/categories_news/2/articles?limit=2';

    $.get(apiMenu, function (data) {
        let content = '';
        data.forEach((element) => {
            content += `<li><a href="#">${element.name}</a></li>`;
        });
        $('#navigation').html(content);
    });

    $.get(apiTrendingLeft, function (data) {
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
                            <h2><a href="latest_news.html" data-animation="fadeInUp"
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

    $.get(apiTrendingRight, function (data) {
        let content = '';
        console.log(data);
        data.forEach((element) => {
            content += `
            <div class="col-lg-12 col-md-6 col-sm-6">
                <div class="trending-top mb-30">
                    <div class="trend-top-img">
                        <img src="${element.thumb}" alt="">
                        <div class="trend-top-cap trend-top-cap2">
                            <span class="bgb">FASHION</span>
                            <h2><a href="latest_news.html">${element.title}</a></h2>
                            <p>${element.publish_date}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        $('#trending-right > .row').html(content);
    });

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
