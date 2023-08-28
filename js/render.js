const itemsWrapper = document.querySelector('.items-wrapper');
let total = 0;
const totalHTML = document.querySelector('#count');
async function getItems() {

    const response = await fetch('./data.json');
    const itemsArr = await response.json();

    renderItems(itemsArr);

}

getItems();

function renderItems(itemsArr) {

    itemsArr.forEach( function(item) {

        const itemHTML = `        <div class="item ${item.color}">
        <div class="left-char">
          <img id="icon" src="${item.icon}" alt="">
          <span class="${item.spanCol}" id="category">${item.category}</span>
        </div>
        <div class="right-char">
          <p id="score">${item.score}<span>/ 100</span></p>
        </div>
      </div>`;
        total += parseInt(item.score);

        itemsWrapper.insertAdjacentHTML('beforeend', itemHTML);
    })
    totalHTML.innerText = Math.round(total / 4)
}