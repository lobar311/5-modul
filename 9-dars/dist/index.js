System.register("tupe", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("data", [], function (exports_2, context_2) {
    "use strict";
    var categories, products;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("categories", categories = [
                {
                    id: 1,
                    name: "Mevalar",
                    image: "https://xabar.uz/static/crop/3/8/920__95_3892899160.jpg",
                },
                {
                    id: 2,
                    name: "Sabzavotlar",
                    image: "https://storage.kun.uz/source/9/bJWZilOwkaoh6gl2Vtefkb5GVVJtW0MO.jpg",
                },
                {
                    id: 3,
                    name: "Ichimliklar",
                    image: "https://odam.uz/public/upload/media/entries/2019-12/24/2307-entry-2-1577204214.jpg",
                },
                {
                    id: 4,
                    name: "O'yinchoqlar",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2H0TOhXU8LRnAoJ2-9YxJFQZJCEASNXXQKw&s",
                },
                {
                    id: 4,
                    name: "Non mahsulotlari",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSI5hWDWfBHbfCg2N9e8ucAUeD000YHmN3g&s",
                },
                {
                    id: 4,
                    name: "Shirinliklar",
                    image: "https://avatars.mds.yandex.net/get-altay/11411122/2a0000018e85b7ab65fe195c04512d6959e4/L_height",
                },
            ]);
            exports_2("products", products = [
                {
                    id: 10,
                    status: "Active",
                },
            ]);
        }
    };
});
System.register("index", ["data"], function (exports_3, context_3) {
    "use strict";
    var data_1, categoriesContainer, renderCatigories;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (data_1_1) {
                data_1 = data_1_1;
            }
        ],
        execute: function () {
            categoriesContainer = document.querySelector("#categories");
            renderCatigories = function () {
                if (!categoriesContainer) {
                    console.error("categoriesContainer topilmadi");
                    return;
                }
                categoriesContainer.innerHTML = "";
                data_1.categories.map(function (item) {
                    var col = document.createElement("div");
                    col.className = "col-4 mb-2";
                    col.innerHTML = "\n        <img src=\"".concat(item.image, "\" alt=\"\" class=\"w-100 rounded\">\n        <div class=\" d-flex justify-content-between p-2\">\n        <p class= \"fw-bold\">").concat(item.name, "</p>\n        <i class=\"fa-solid fa-basket-shopping\"></i>\n        </div>\n        ");
                    categoriesContainer.appendChild(col);
                });
            };
            window.onload = function () {
                renderCatigories();
            };
        }
    };
});
