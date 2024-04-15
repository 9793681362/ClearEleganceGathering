

let v1 = document.querySelector('.v1')
let v2 = document.querySelector('.v2')
let nav_down = document.querySelector('.nav-down')
let open = document.querySelector('.open')



v1.addEventListener('click', function () {
    if (nav_down.style.display === "none") {
        nav_down.style.display = "flex";
    } else {
        nav_down.style.display = "none";
    }
});

v2.addEventListener('click', function () {
    window.location.assign('http://www.baidu.com')
})

open.addEventListener('click', function () {
    window.location.href = 'https://www.baidu.com'
})