window.addEventListener('load', function() {
    //轮播图
    var home = document.querySelector('.home_lunbo');
    var ul = home.querySelector('ul');
    var arrl = home.querySelector('.arrowl');
    var arrr = home.querySelector('.arrowr');
    var homeWidth = home.offsetWidth;
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
    }
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var flag = true;
    arrl.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * homeWidth + 'px';
            }
            num--;
            animate(ul, -num * homeWidth, function() {
                flag = true;
            });
        }
    });
    arrr.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                num = 0;
                ul.style.left = 0;
            }
            num++;
            animate(ul, -num * homeWidth, function() {
                flag = true;
            });
        }
    });
    // 返回顶部
    var sliderbar = document.querySelector('.slider-bar');
    var introduce = document.querySelector('#introduce');
    var goBack = document.querySelector('.goBack');
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
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }
    // 下划线
    let underline = document.querySelector('.underline');
    let fr = document.querySelector('.fr');
    let lis = fr.querySelectorAll('.li');
    let current = 280;
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
    // 滚动渐变导航栏
    window.addEventListener("scroll", () => {
        let shortcut = document.querySelector(".shortcut");
        shortcut.classList.toggle("sticky", window.scrollY > 0);
    })
})