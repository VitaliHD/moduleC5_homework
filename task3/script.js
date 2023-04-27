function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        if(xhr.status !=200) {
            console.log('Статус ответа', xhr.status);
        } else {
            const resalt = JSON.parse(xhr.responce);
            if (callback) {
                callback(resalt);
            }
        }
    };
    xhr.onerror = function() {
        console.log('Ошибка! СТатутус ответа:', xhr.status);
    };
    xhr.send();
}

const resultNode = document.querySelector('.result');
const inBtmNode = document.querySelector('.inBtm');

function displayResl(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
         <div class="card">
            <img class="card_image" src="${item.download_url}"  alt="image">
            <p>${item.author}</p>
         </div>
        `;
        cards = cards + cardBlock;
    });
resultNode.innerHTML = cards;
}
function NoResult(value){
    resultNode.innerHTML = `<h2>Число ${value} вне диапазона от 1 до 10</h2>`;
}

inBtmNode.addEventListener('click', () => {
    const value = document.querySelector('input').value;
    if (value > 0 && value < 11){
        useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResl)
    } else {
        NoResult(value);
    }
})