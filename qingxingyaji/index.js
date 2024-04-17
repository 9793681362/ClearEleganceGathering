// 获取元素
const headAall = document.querySelectorAll('.button-wrapper li a')
const head_b = document.querySelector('.button-wrapper .experience')
const input_box_2 = document.querySelector('.input-box-2')
const input_box_center = document.querySelector('.input-box-center')


// head A标签模块
for (let i = 0; i < headAall.length; i++) {
    headAall[i].addEventListener('click', function () {
        for (let j = 0; j < headAall.length; j++) {
            headAall[j].classList.remove('active')
        }
        this.classList.add('active')
    })
}

// 点击切换
let headBClicked = false;

head_b.addEventListener('click', function () {

    if (!headBClicked) {
        input_box_2.style.display = 'none'
        input_box_center.style.display = 'block'
        headBClicked = true;
    } else {
        input_box_2.style.display = 'flex'
        input_box_center.style.display = 'none'
        headBClicked = false;
    }

})


// 点击切换搜索按钮
const search = document.querySelector('.input-box-1')
const searchButton = document.querySelector('#search')
const main_search = document.querySelector('.main-search')
const box1_after = document.querySelector('.box1-after')


main_search.addEventListener('focus', function () {
    searchButton.classList.remove('input-box-3-button-1')
    searchButton.classList.add('input-box-3-button-2')
})

main_search.addEventListener('blur', function () {
    searchButton.classList.remove('input-box-3-button-2')
    searchButton.classList.add('input-box-3-button-1')
})

// 防止按钮的点击事件默认行为
search.addEventListener('click', function (event) {
    console.log('点击了');
    main_search.focus()
});

search.addEventListener('mousemove', function () {
    console.log('我移动过来了');
    delete_after(search)
});

search.addEventListener('mouseleave', function () {
    console.log('我移动走了');
    this.classList.remove('box1-after')
});



const input_box_2_left = document.querySelector('.input-box-2-left')

input_box_2_left.addEventListener('mousemove', function () {
    console.log('我移动过来了');
    delete_after(input_box_2_left)
    delete_after(search)
})

input_box_2_left.addEventListener('mouseleave', function () {
    console.log('我移动过来了');
    remove_after(input_box_2_left)
    remove_after(search)
})

function delete_after(element) {
    console.log('我移动过来了');
    element.classList.add('box1-after')
}

function remove_after(element) {
    console.log('我移动过来了');
    element.classList.remove('box1-after')
}



const input_box_2_right = document.querySelector('.input-box-2-right')

input_box_2_right.addEventListener('mousemove', function () {
    delete_after(input_box_2_left)
    delete_after(input_box_2_right)
})

input_box_2_right.addEventListener('mouseleave', function () {
    remove_after(input_box_2_left)
    remove_after(input_box_2_right)
})














































