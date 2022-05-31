
// уменьшаем тулбар при скроллинге
window.addEventListener("scroll", e => {
    const _toolbar = document.querySelector('.toolbar-rascal')
    if (window.scrollY > 150) {
        _toolbar.classList.add('toolbarScroll')
    } else {
        _toolbar.classList.remove('toolbarScroll')
    }
})

// показываем тему на которую нажали из мобильного меню



const _mainContent = document.querySelector('.main_content')

_mainContent.addEventListener('click', elementMainContent => {
    // если кликнули по дропдауну
    if (elementMainContent.target.parentNode.classList.contains('select__dropdown')) {
        // текущий option который нажали
        const dropdownOption = elementMainContent.target.nextElementSibling
        // если нажали по форме option
        if (elementMainContent.target.classList.contains('dropdown__title')) {
            // показываем/скрываем список option
            dropdownOption.classList.toggle('dropdown__option_active')

            // слушаем клик по option
            dropdownOption.addEventListener('click', el => {
                // получаем текст option и вставляем в заголовок


                // получаем блоки к которым будет переход
                const _themeBlock = document.querySelectorAll('.themeBlock')
                const _instructionThemeBlock = document.querySelectorAll('.instructionThemeBlock')


                if (dropdownOption.getAttribute('data-content') == 'blog' && el.target.classList.contains('option__item')) {
                    blockShow(_themeBlock, el)
                    dropdownOption.classList.remove('dropdown__option_active')
                } else if (dropdownOption.getAttribute('data-content') == 'instruction' && el.target.classList.contains('option__item')) {
                    blockShow(_instructionThemeBlock, el)
                    dropdownOption.classList.remove('dropdown__option_active')
                } else {
                    return false
                }

            })
        }

    }
    function blockShow (params, el) {
        const currentTitle = el.target.innerHTML
        elementMainContent.target.innerHTML = currentTitle

        // значение аттребута option по которому нажали
        let currentValue = el.target.getAttribute('value')
        // сбрасываем все блоки
        params.forEach(elBlockTheme => {
            elBlockTheme.style.display = 'none'
        })
        // показываем нужный блок
        params.forEach(elBlockTheme => {
            if (elBlockTheme.getAttribute('data-theme') == currentValue) {
                elBlockTheme.style.display = 'block'
                // плавное пролистывание
                const theme = document.querySelector('.article__theme')
                const instructionVideoTheme = document.querySelector('.instructionVideo__theme')
                sctollTo(theme)
                sctollTo(instructionVideoTheme)
            }
        })
    }


});




// показываем тему на которую нажали из  бокового меню

// const themeDesktop = document.querySelector('.theme__desktop')


_mainContent.addEventListener('click', elementMainContent => {

    if (elementMainContent.target.classList.contains('theme__item')) {
        const contentId = elementMainContent.target.getAttribute('id')
        const contentTheme = elementMainContent.target.parentNode.getAttribute('data-content')
        const _themeBlock = document.querySelectorAll('.themeBlock')
        const _instructionThemeBlock = document.querySelectorAll('.instructionThemeBlock')
        if (contentTheme == 'blog') {
            blockShow(_themeBlock)
        }

        if (contentTheme == 'instruction') {
            blockShow(_instructionThemeBlock)
        }


        function blockShow (theme) {
            theme.forEach(element => {
                element.style.display = 'none'
            });
            theme.forEach(element => {
                if (element.getAttribute('data-theme') == contentId) {
                    element.style.display = 'block'
                }
                const theme = document.querySelector('.article__theme')
                const instructionVideoTheme = document.querySelector('.instructionVideo__theme')
                sctollTo(theme)
                sctollTo(instructionVideoTheme)
            });
        }
    }
})


function sctollTo (paramsScroll) {
    paramsScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}



// показываем тему на которую нажали из тулбара
const _toolbarTab = document.querySelector('.tab__menu')

_toolbarTab.addEventListener('click', e => {
    const _tabItem = document.querySelectorAll('.menu__item')
    _tabItem.forEach(element => {
        element.classList.remove('menu__item_active')
    });
    const _sectionTab = document.querySelectorAll('.sectionTab')
    const currentClick = e.target.id

    _sectionTab.forEach(elBlock => {
        if (elBlock.getAttribute('data-tab') == currentClick) {
            _sectionTab.forEach(elBlock => {
                elBlock.style.display = 'none'
            })
            elBlock.style.display = 'block'
            e.target.classList.add('menu__item_active')
        } else {
            return
        }
    })
})

// тайминг
const timing = document.querySelector('.instructionVideo__theme')
const timingDetails = document.querySelectorAll('.timing__time')

timing.addEventListener('click', e => {
    const timeCurrent = e.target
    const timeClick = e.target.getAttribute('data-timeButton')
    timingDetails.forEach(element => {
        const timingDetailsAttr = element.getAttribute('data-time')
        if (timeClick == timingDetailsAttr) {
            timeCurrent.nextElementSibling.nextElementSibling.childNodes[0].classList.toggle('button__true')
            element.classList.toggle('timing__time_true')
        }
    });
})


//тулбар

const toolbarRascal = document.querySelector('.toolbar-rascal')

//тулбар гамбургер

toolbarRascal.addEventListener('click', e => {
    const tabMenu = document.querySelector('.tab__menu')
    const tabBurger = document.querySelector('.tab__burger')
    if (e.target.classList.contains('mobil__icon') == false) {



        if (e.target.classList.contains('tab__burger') || e.target.classList.contains('burger__line')) {
            tabMenu.classList.toggle('tab__menu_active')
            tabBurger.classList.toggle('tab__burger_active')
        }
        else if (e.target.classList.contains('menu__item')) {
            tabMenu.classList.remove('tab__menu_active')
            tabBurger.classList.remove('tab__burger_active')
            window.scrollTo(0, 10)
        }
        else if (e.target.classList.contains('toolbar__block') ||
            e.target.classList.contains('mobil__icon')) {
            tabMenu.classList.remove('tab__menu_active')
            tabBurger.classList.remove('tab__burger_active')
        }

    }
    if (e.target.classList.contains('mobil__icon') == true) {
        tabMenu.classList.remove('tab__menu_active')
        tabBurger.classList.remove('tab__burger_active')
    }

})

//тулбар гамбургер обратная связь

toolbarRascal.addEventListener('click', e => {
    const tabMenu = document.querySelector('.tab__menu')
    const tabBurger = document.querySelector('.tab__burger')
    const mobilBurger = document.querySelector('.mobil__burger')
    if (e.target.classList.contains('burger__line') == false ||
        e.target.classList.contains('tab__burger') == false
    ) {
        if (e.target.classList.contains('mobil__icon')) {
            mobilBurger.classList.toggle('mobil__burger_active')
        } else if (e.target.classList.contains('toolbar__block') ||
            e.target.classList.contains('toolbar__block')
        ) {
            mobilBurger.classList.remove('mobil__burger_active')
        } else {
            mobilBurger.classList.remove('mobil__burger_active')
        }
        // else if (e.target.classList.contains('tab__burger') || e.target.classList.contains('burger__line')) {
        //     mobilBurger.classList.remove('mobil__burger_active')
        //     tabMenu.classList.add('tab__menu_active')
        //     tabBurger.classList.remove('tab__burger_active')
        // }
    }

})
