//import '../styles.scss';


setDefaultTheme();

function setDefaultTheme(){
    const defaultTheme = document.querySelector('.active');

    document.body.classList.add(`theme-${defaultTheme.dataset.theme}`);
}

const button = document.querySelector('.color-switch');
const first = document.querySelector('.color-scheme');
const themeContainer = document.querySelector('.color-switch-inner');

button.addEventListener("click", ()=>{
    removeActive();
    const oldTheme = findOldTheme();
    const elem = findElement(oldTheme);
    setClass(elem, oldTheme);
})

function setClass(elm, oldTheme) {
    elm.classList.add('active');

    const theme = elm.dataset.theme;
    document.body.classList.replace(oldTheme, `theme-${theme}`);
}

function findElement(theme) {

    const next = themeContainer
        .querySelector(`[data-theme="${theme.slice(6)}"]`)?.nextElementSibling;
        console.log(next);
    return next ? next : first;
}

function removeActive(){
    document.querySelector('.active')?.classList.remove('active');
}

function findOldTheme() {
    const classes = Array.from(document.body.classList);
    const c = classes.find((className) => className.includes('theme-'));
    
    console.log('>' + c);
    
    return c;
}