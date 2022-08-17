import { DateTime } from './luxon.js';

const displayDate = () => {
  const mainDate = document.getElementById('main_date');
  mainDate.innerText = DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default displayDate;