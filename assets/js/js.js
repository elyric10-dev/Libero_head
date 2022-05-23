//Opening Search bar
const search_holder = document.querySelector('.search_holder')
search_holder.addEventListener('click', () => {
        const search_now_container = document.querySelector('.search_now_container')
        search_now_container.classList.add('active')
    })
    //Closing Search bar
const search_close_button_holder = document.querySelector('.search_close_button_holder')
search_close_button_holder.addEventListener('click', () => {
        const search_now_container = document.querySelector('.search_now_container')
        search_now_container.classList.remove('active')
    })
    //Opening Change Color
const drawer_holder = document.querySelector('.drawer_holder')
drawer_holder.addEventListener('click', () => {
        const drawer_background_color_holder = document.querySelector('.drawer_background_color_holder')
        drawer_background_color_holder.classList.add('active')
    })
    //Closing Change Color
const drawer_close_button = document.querySelector('.drawer_close_button')
drawer_close_button.addEventListener('click', () => {
    const drawer_background_color_holder = document.querySelector('.drawer_background_color_holder')
    drawer_background_color_holder.classList.remove('active')
})

//Color #1
const drawer_change_color_box1 = document.querySelector('.drawer_change_color_box1')
drawer_change_color_box1.addEventListener('click', () => {
    document.querySelector(':root').style.setProperty('--header_bg_color', 'rgb(10, 35, 61)')
    document.querySelector(':root').style.setProperty('--for_designing_highlight', 'rgb(64, 119, 242)')
})

//Color #2
const drawer_change_color_box2 = document.querySelector('.drawer_change_color_box2')
drawer_change_color_box2.addEventListener('click', () => {
    document.querySelector(':root').style.setProperty('--header_bg_color', 'rgb(61, 10, 22)')
    document.querySelector(':root').style.setProperty('--for_designing_highlight', 'rgb(242, 65, 73)')
})

//Color #3
const drawer_change_color_box3 = document.querySelector('.drawer_change_color_box3')
drawer_change_color_box3.addEventListener('click', () => {
    document.querySelector(':root').style.setProperty('--header_bg_color', 'rgb(22, 10, 61)')
    document.querySelector(':root').style.setProperty('--for_designing_highlight', 'rgb(140, 64, 242)')
})

//Color #4
const drawer_change_color_box4 = document.querySelector('.drawer_change_color_box4')
drawer_change_color_box4.addEventListener('click', () => {
    document.querySelector(':root').style.setProperty('--header_bg_color', 'rgb(29, 61, 10)')
    document.querySelector(':root').style.setProperty('--for_designing_highlight', 'rgb(98, 242, 65)')
})

//Color #5
const drawer_change_color_box5 = document.querySelector('.drawer_change_color_box5')
drawer_change_color_box5.addEventListener('click', () => {
    document.querySelector(':root').style.setProperty('--header_bg_color', 'rgb(94, 63, 32)')
    document.querySelector(':root').style.setProperty('--for_designing_highlight', 'rgb(242, 190, 65)')
})