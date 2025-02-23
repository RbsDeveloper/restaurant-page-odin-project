import smothie from './assets/smothie.png'

export function homePage () {
    const header = document.querySelector('header');
    const main = document.getElementById('content');
    const footer = document.querySelector('footer');
/*
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = 'Fruity AF';
    header.appendChild(logo);


    const headerBtns = ['home', 'menu', 'contact'];
    const nav = document.createElement('nav');
    headerBtns.forEach(btn =>{
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = btn;
        nav.appendChild(button);
    })
    header.appendChild(nav);*/

    const mainText = document.createElement('div');
    mainText.classList.add('text');

    const mainHeading = document.createElement('h1');
    mainHeading.innerText = 'Blending Happiness, One Sip at a Time!'
    mainText.appendChild(mainHeading);

    const secondHeading = document.createElement('h2');
    secondHeading.innerText = 'Made with love, fruit, and probably too much enthusiasm!'
    mainText.appendChild(secondHeading);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-section');

    const btnContainerValues = ['Find out more', 'Contact'];
    btnContainerValues.forEach(btn =>{
        const button = document.createElement('button');
        button.innerText = btn;
        btnContainer.appendChild(button);
    })

    mainText.appendChild(btnContainer);
    main.appendChild(mainText);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('png');

    const mainImg = document.createElement('img');
    mainImg.src = smothie;

    imageContainer.appendChild(mainImg);
    main.appendChild(imageContainer);
}