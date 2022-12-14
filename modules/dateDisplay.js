import { DateTime } from './luxon.js';

const dateDisplay = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  const date = document.querySelector('.time');
  date.innerHTML = now;
};

export default dateDisplay;