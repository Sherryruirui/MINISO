window.addEventListener('load', function() {
    // 轮播图
    let focus = document.querySelector('.focus');
    let ul = focus.querySelector('ul');
    let ol = focus.querySelector('ol');
    for (let i = 0; i < ul.children.length; i++) {
        let li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            let index = this.getAttribute('index');
            let focusWidth = focus.offsetWidth;
            // console.log(focusWidth);
            animate(ul, -index * focusWidth);
        });
    }
    let imgArr = document.getElementsByTagName("img");
    ul.style.width = 1280 * (imgArr.length + 1) + "px";
    let outer = document.getElementById("outer");
    ol.style.left = (outer.offsetWidth - ol.offsetWidth) / 2 + "px";
    let index = 0;
    let allA = ol.getElementsByTagName("li");
    allA[index].className = "current";
    // 克隆第一张
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    let circle = 0;
    let num = 0;
    let next = document.querySelector('.arrow');
    let flag = true;
    next.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            var focusWidth = focus.offsetWidth;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });

    // 排他
    function circleChange() {
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    let timer = setInterval(function() {
        next.click();
    }, 3000);

    // tab栏切换
    let goodsNav = document.querySelector('.goodsNav');
    let gli = goodsNav.getElementsByTagName('li');
    let good = document.querySelector('.good');
    let box = good.querySelectorAll('#box');
    for (let i = 0; i < gli.length; i++) {
        gli[i].index = i;
        gli[i].onmouseenter = function() {
                for (let j = 0; j < gli.length; j++) {
                    gli[j].className = '';
                    box[j].className = "w box";
                }
                this.className = 'act';
                // box[this.index].style.display = "block";
                box[this.index].className = 'boxappear w box';
            }
            // for (var t = 1; t < gli.length; t++) {
            //     gli[t].className = '';
            //     box[t].className = "w box";
            // }
    }

    // 返回顶部
    let sliderbar = document.querySelector('.slider-bar');
    let introduce = document.querySelector('#introduce');
    let goBack = document.querySelector('.goBack');
    document.addEventListener('scroll', () => {
        if (window.pageYOffset >= 520) {
            sliderbar.style.opacity = 1;
            goBack.style.display = 'block';
        } else {
            sliderbar.style.opacity = 0;
            goBack.style.display = 'none';
        }
    })
    goBack.addEventListener('click', function() {
        animate1(window, 0);
    });

    function animate1(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            let step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }
    // 滚动渐变导航栏
    window.addEventListener("scroll", () => {
        let shortcut = document.querySelector(".shortcut");
        shortcut.classList.toggle("sticky", window.scrollY > 0);
    })

    // 下划线
    let underline = document.querySelector('.underline');
    let fr = document.querySelector('.fr');
    let lis = fr.querySelectorAll('.li');
    let current = 50;
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function() {
            animate(underline, this.offsetLeft - 5);
            fr.addEventListener('mouseleave', function() {
                animate(underline, current);
            })
        })
        lis[i].addEventListener('click', function() {
            current = this.offsetLeft - 5;
        })
    }


})