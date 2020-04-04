import '@marek.lints/vanilla-box/popup.css';
import '@marek.lints/vanilla-box/config.css';
import { configmanager } from '@marek.lints/vanilla-box';
import '../css/app.css';

window.addEventListener('load', () => {
    document.querySelector('#test1').innerHTML = /*html*/`
        <popup-window config-name="blank_400_400">
        <template>
            <div>
                <h1>Test www</h1>
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
                <h1>Test www</h1>
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
    document.querySelector('#test2 button').addEventListener('click', () => document.querySelector('#test2 popup-window').open());

    configmanager.addConfig('blank_90pct_50pct', {
        top: 0,
        width: '90%',
        height: '50%',
        displayCloseButton: true,
        coverBackground: 'white',
        coverOpacity: '90%',
        coverCloseOnClick: true
    });
    document.querySelector('#test3').innerHTML = /*html*/`
        <popup-window config-name="blank_90pct_50pct">
        <template>
            <div>
                <h1>Test www</h1>
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
        dimensionClass: 'popup-blank-300px-100pct',
        displayCloseButton: true,
        coverBackground: 'white',
        coverOpacity: '90%',
        coverCloseOnClick: true
    });
    document.querySelector('#test4').innerHTML = /*html*/`
        <popup-window config-name="blank_300px_100pct">
        <template>
            <div>
                <h1>Test www</h1>
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
    document.querySelector('#test4 button').addEventListener('click', () => document.querySelector('#test4 popup-window').open());

});