import ArrayTemplate from './modules/ArrayTemplate.js';
import localCheck from './modules/localCheck.js';
import navbar from './modules/navbar.js';
import dateDisplay from './modules/dateDisplay.js';

const bookArr = new ArrayTemplate();
localCheck();
bookArr.getInfo();
bookArr.addfunction();
bookArr.forLoop();
bookArr.storeInfo();
bookArr.removeFunction();
navbar();
dateDisplay();
window.setInterval(dateDisplay, 3000);