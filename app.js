// Get Elements
const loadingBar = document.querySelector('.loading__bar');
const loadingBarBtns = document.querySelectorAll('.loading__bar__btn');
const autoBtn = document.querySelector('button[name=auto');
let spanEl = document.querySelector('.percentage');

function load() {
  loadingBar.style.width = this.value;
  spanEl.textContent = `${ this.value}`;
  if (this.name === 'auto') {
    this.style.backgroundColor = '#DE3524';
    let width = 10;
    let loader = setInterval(function () {
      if (width >= 100) {
        clearInterval(loader); /// Stops function
        autoBtn.style.backgroundColor = 'transparent';
      } else {
        width++;
        loadingBar.style.width = width + '%';
        spanEl.textContent = `${ width + '%'}`;
      }
    }, 100);
  }
}

// Load Trigger
loadingBarBtns.forEach((button) => button.addEventListener('click', load));












// let count = 0;
// let loader = setInterval(function() {
//  if(count  === 10) {
//    clearInterval(loader);
//  }else {
//     count++;
//     console.log(count)
//  }
// }, 500);

// clearInterval()