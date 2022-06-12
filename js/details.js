window.addEventListener('load', function() {
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
    let underline = document.querySelector('.underline1');
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
    // 放大镜
    let pic1 = document.querySelector('.pic1');
    let mask = document.querySelector('.mask');
    let big = document.querySelector('.big');
    pic1.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    pic1.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    pic1.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        mask.style.left = x - mask.offsetWidth / 2 + 'px';
        mask.style.top = y - mask.offsetHeight / 2 + 'px';
        var maskMaxX = pic1.offsetWidth - mask.offsetWidth;
        var maskMaxY = pic1.offsetHeight - mask.offsetHeight;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMaxX) {
            maskX = maskMaxX;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMaxY) {
            maskY = maskMaxY;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigImg = big.querySelector('img');
        var bigMaxX = bigImg.offsetWidth - big.offsetWidth;
        var bigMaxY = bigImg.offsetHeight - big.offsetHeight;
        var bigX = maskX * bigMaxX / maskMaxX;
        var bigY = maskY * bigMaxY / maskMaxY;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
})