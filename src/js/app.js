import 'vanilla-box/popup.css';
import { box } from 'vanilla-box';
import { config } from 'vanilla-box';

console.log('box', box);
console.log('config', config);

box.initPopup();
setTimeout(() => box.openPopup(config.POPUP_CONF_DEFAULT, 'testTemplate'), 1000);

