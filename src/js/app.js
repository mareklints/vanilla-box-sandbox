import '@marek.lints/vanilla-box/popup.css';
import '@marek.lints/vanilla-box/config.css';
import { configmanager } from '@marek.lints/vanilla-box';
import '../css/app.css';

window.addEventListener('load', () => {
    document.querySelector('#test1').innerHTML = /*html*/`
        <popup-window config-name="blank_400_400">
        <template>
            <div>
                <h1>Center</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, provident vero corrupti dolore
                    pariatur consequatur neque dolor eveniet ut voluptas voluptates voluptatibus, laudantium sequi non
                    omnis
                    tempora cum mollitia minima?
                </p>
            </div>
        </template>
        </popup-window>
        <button class="btn btn-primary">Open</button>
    `;
    document.querySelector('#test1 button').addEventListener('click', () => document.querySelector('#test1 popup-window').open());

    document.querySelector('#test2').innerHTML = /*html*/`
        <popup-window config-name="default">
        <template>
            <div>
                <h1>Center</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, provident vero corrupti dolore
                    pariatur consequatur neque dolor eveniet ut voluptas voluptates voluptatibus, laudantium sequi non
                    omnis tempora cum mollitia minima?
                </p>
            </div>
        </template>
        </popup-window>
        <button class="btn btn-primary">Open</button>
    `;
    document.querySelector('#test2 button').addEventListener('click', () => document.querySelector('#test2 popup-window').open());

    configmanager.addConfig('blank_90pct_50pct', {
        top: 0,
        appearFrom: 'right',
        isFixed: false,
        width: '300px',
        height: '80%',
        background: 'lightskyblue',
        displayCloseButton: true,
        coverBackground: 'white',
        coverOpacity: '90%',
        coverCloseOnClick: true
    });
    document.querySelector('#test3').innerHTML = /*html*/`
        <popup-window config-name="blank_90pct_50pct">
        <template>
            <div>
                <h1>Right</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, provident vero corrupti dolore
                    pariatur consequatur neque dolor eveniet ut voluptas voluptates voluptatibus, laudantium sequi non
                    omnis
                    tempora cum mollitia minima?
                </p>
            </div>
        </template>
        </popup-window>
        <button class="btn btn-primary">Open</button>
    `;
    document.querySelector('#test3 button').addEventListener('click', () => document.querySelector('#test3 popup-window').open());

    configmanager.addConfig('blank_300px_100pct', {
        top: 0,
        appearFrom: 'left',
        isFixed: true,
        cssClass: 'popup-blank-300px-100pct',
        displayCloseButton: true,
        coverBackground: 'white',
        coverOpacity: '90%',
        coverCloseOnClick: true
    });
    document.querySelector('#test4').innerHTML = /*html*/`
        <popup-window config-name="blank_300px_100pct">
        <template>
            <div>
                <h1>Left</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, provident vero corrupti dolore
                    pariatur consequatur neque dolor eveniet ut voluptas voluptates voluptatibus, laudantium sequi non
                    omnis tempora cum mollitia minima?
                </p>
            </div>
        </template>
        </popup-window>
        <button class="btn btn-primary">Open</button>
    `;
    document.querySelector('#test4 button').addEventListener('click', () => document.querySelector('#test4 popup-window').open());

    configmanager.addConfig('blank_100pct_200px', {
        top: 0,
        appearFrom: 'top',
        isFixed: true,
        height: '200px',
        background: 'lightgreen',
        displayCloseButton: true,
        coverBackground: 'white',
        coverOpacity: '90%',
        coverCloseOnClick: true
    });
    document.querySelector('#test5').innerHTML = /*html*/`
        <popup-window config-name="blank_100pct_200px">
        <template>
            <div>
                <h1>Top</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, provident vero corrupti dolore
                    pariatur consequatur neque dolor eveniet ut voluptas voluptates voluptatibus, laudantium sequi non
                    omnis tempora cum mollitia minima?
                </p>
            </div>
        </template>
        </popup-window>
        <button class="btn btn-primary">Open</button>
    `;
    document.querySelector('#test5 button').addEventListener('click', () => document.querySelector('#test5 popup-window').open());

    configmanager.addConfig('blank_100pct_200px_bottom', {
        appearFrom: 'bottom',
        isFixed: true,
        height: '200px',
        background: 'lightblue',
        displayCloseButton: true,
        coverBackground: 'white',
        coverOpacity: '90%',
        coverCloseOnClick: true
    });
    document.querySelector('#test6').innerHTML = /*html*/`
        <popup-window config-name="blank_100pct_200px_bottom">
        <template>
            <div>
                <h1>Bottom</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, provident vero corrupti dolore
                    pariatur consequatur neque dolor eveniet ut voluptas voluptates voluptatibus, laudantium sequi non
                    omnis tempora cum mollitia minima?
                </p>
            </div>
        </template>
        </popup-window>
        <button class="btn btn-primary">Open</button>
    `;
    document.querySelector('#test6 button').addEventListener('click', () => document.querySelector('#test6 popup-window').open());
});