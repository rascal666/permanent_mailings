
// уменьшаем тулбар при скроллинге
window.addEventListener("scroll",e  => {
    const _toolbar = document.querySelector('.toolbar-rascal')
    if (window.scrollY > 150) {
        _toolbar.classList.add('toolbarScroll')
    } else{
        _toolbar.classList.remove('toolbarScroll')
    }
})

// показываем тему на которую нажали
const _blogThemes = document.querySelector('.blog_themes')
const theme = document.querySelector('.article__theme')
_blogThemes.addEventListener('click', e =>{
    e.preventDefault();
const _themeBlock = document.querySelectorAll('.themeBlock')
    const currentClickTheme = e.target.id
    _themeBlock.forEach(elBlockTheme => {
        elBlockTheme.style.display = 'none'
    })
    _themeBlock.forEach(elBlockTheme => {
        if (elBlockTheme.getAttribute('data-theme') == currentClickTheme ||
        elBlockTheme.getAttribute('data-theme') == e.target.value) {
            elBlockTheme.style.display = 'block'
            theme.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    })
})

// показываем тему на которую нажали
const _toolbarTab = document.querySelector('.toolbar__tab')
_toolbarTab.addEventListener('click', e =>{
const _sectionTab = document.querySelectorAll('.sectionTab')
    const currentClick = e.target.id
    _sectionTab.forEach(elBlock => {
        elBlock.style.display = 'none'
    })
    _sectionTab.forEach(elBlock => {
        if (elBlock.getAttribute('data-tab') == currentClick) {
            elBlock.style.display = 'block'

        }
    })
})