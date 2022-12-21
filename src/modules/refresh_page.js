/* eslint-disable no-restricted-globals */

// get all current scores from api..
const refreshBtn = () => {
  const refresh = document.querySelector('.refresh-btn');
  refresh.addEventListener('click', () => {
    location.reload();
  });
};

export default refreshBtn;
