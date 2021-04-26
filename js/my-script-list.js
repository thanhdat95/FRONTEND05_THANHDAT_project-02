$(document).ready(function () {
    let baseURL = 'https://api-fe-course.codethanhthuongthua.asia/api/';

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let categoryID = url.searchParams.get('id');

    let baseURLArticles = `${baseURL}categories_news`;
    let page = 1;
    let offset = 0;
    let limit = 4;
    let totalPage = 0;

    renderItems(limit, offset);

    $.get(`${baseURL}categories_news`, function (data) {
        let content = '<li><a href="index.html">Trang Chủ</a></li>';
        if (data.length < 5) {
            data.forEach((item) => {
                content += `<li data-id="${item.id}"><a href="category.html?id=${item.id}">${item.name}</a></li>`;
            });
        } else {
            for (let index = 0; index <= 2; index++) {
                content += `<li data-id="${data[index].id}"><a href="category.html?id=${data[index].id}">${data[index].name}</a></li>`;
            }

            content += `
                <li><a href="#">Danh mục khác</a>
                <ul class="submenu">
            `;

            for (let index = 3; index < data.length; index++) {
                content += `<li data-id="${data[index].id}"><a href="category.html?id=${data[index].id}">${data[index].name}</a></li>`;
            }

            content += `</ul></li>`;
        }

        $('#navigation').html(content);
        $(`.main-header .main-menu ul li[data-id="${categoryID}"]`).addClass('menu-active');
    });

    //pagination
    $.get(baseURLArticles + '/total', function (data) {
        totalPage = Math.ceil(data / 5);
    });

    $('.btn-pagination').on('click', function (e) {
        e.preventDefault();
        let btn = $(this);
        if (btn.hasClass('btn-prev')) {
            page--;
        } else {
            page++;
        }

        if (page > 1) $('.btn-prev').parent().removeClass('disabled');
        if (page == 1) $('.btn-prev').parent().addClass('disabled');
        if (page == totalPage) $('.btn-next').parent().addClass('disabled');
        if (page < totalPage) $('.btn-next').parent().removeClass('disabled');

        console.log(page);
        offset = (page - 1) * limit;
        renderItems(limit, offset);
    });

    function renderItems(limit, offset) {
        $.get(
            `${baseURLArticles}/${categoryID}/articles`,
            { limit: limit, offset: offset },
            function (data) {
                console.log(data);
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
                    </div>`;
                });
                $('#nav-tabContent .row').html(contentList);
            }
        );
    }
});
