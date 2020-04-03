import 'vanilla-box/popup.css';
import 'vanilla-box';

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
        <button>Open</button>
    `;
    document.querySelector('#test1 button').addEventListener('click', () => document.querySelector('#test1 popup-window').open());
});