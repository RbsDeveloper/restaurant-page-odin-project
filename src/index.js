import "./styles.css";
import {homePage} from "./homePage";
import {contact} from "./contact";
import {menu} from "./menu";

homePage()


const navBtns = document.querySelectorAll('nav button');

function setActiveButton(target) {
    navBtns.forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');
}

function loadPage (e) {
    if (!e.target.id) return;

    setActiveButton(e.target);

    const content = document.getElementById('content');
    content.innerHTML = '';

    switch(e.target.id) {
        case 'homeBtn':
            homePage();
            break;
        case 'menuBtn':
            menu();
            break;
        case 'contactBtn':
            contact();
            break;
        default:
            console.warn('Unkown button ID:', e.target.id);
    }
}


navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        loadPage(e);
    })
})



