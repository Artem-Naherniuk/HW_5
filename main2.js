const MODULE = (function () {
    let _vinePrice = 60;
    let _beerPrise = 30;
    let _colaPrice = 10;
    let balance = 0; //тут має бути _ спочатку
    let _price = 0;
    let vinePCSAll = 100; //тут має бути _ спочатку
    let beerPCSAll = 150; //тут має бути _ спочатку
    let colaPCSAll = 200; //тут має бути _ спочатку
    let vinePCS = 0; //тут має бути _ спочатку
    let beerPCS = 0; //тут має бути _ спочатку
    let colaPCS = 0; //тут має бути _ спочатку
    let _all = 0;

    function addV(v) {
        vinePCS += v;
        return vinePCS;
    }

    function addB(b) {
        beerPCS += b;
        return beerPCS;
    }

    function addC(c) {
        colaPCS += c;
        return colaPCS;
    }

    function buy() {
        vinePCSAll -= vinePCS;
        beerPCSAll -= beerPCS;
        colaPCSAll -= colaPCS;
        if (vinePCSAll > 0 && beerPCSAll > 0 && colaPCSAll > 0) {
            balance = colaPCS * _colaPrice + beerPCS * _beerPrise + vinePCS * _vinePrice;
            vinePCS = 0;
            beerPCS = 0;
            colaPCS = 0;
            _price = balance;
            return balance + ' грн';
        } else {
            return 'ТОВАР ЗАКІНЧИВСЯ!!!!';
        }
    }

    function allPrice() {
        _all += _price;
        return _all;

    }

    function getBalance() {
        return balance;
    }

    function getVino() {
        return vinePCSAll;
    }

    function getBeer() {
        return beerPCSAll;
    }

    function getCola() {
        return colaPCSAll;
    }

    return {
        addV: addV,
        addB: addB,
        addC: addC,
        buy: buy,
        getBalance: getBalance,
        getVino: getVino,
        getBeer: getBeer,
        getCola: getCola,
        allPrice: allPrice
    }

}());

const FRM = document.forms['frm'];
const ALERT = document.querySelector('.alert');
const ALERT_MESSAGE = document.querySelector('#alertMessage');

document.querySelector('#add').addEventListener('click', function () {
    let count = document.querySelector('#count').value;
    let span = document.createElement('span');
    if (count == '') {
        return null;
    } else if (FRM.sort.value === 'vino') {
        if (count > MODULE.getVino()) {
            ALERT_MESSAGE.textContent = `На складі немає стільки вина `
            ALERT.style.visibility = 'visible';
        } else {
            MODULE.addV(Number(count));
            span.textContent = `Вино: ${count} шт`;
            document.querySelector('#basket').appendChild(span);
            document.querySelector('#buy').disabled = false;
        }
    } else if (FRM.sort.value === 'beer') {
        if (count > MODULE.getBeer()) {
            ALERT_MESSAGE.textContent = `На складі немає стільки пива `
            ALERT.style.visibility = 'visible';
        } else {
            MODULE.addB(Number(count));
            span.textContent = `Пиво: ${count} шт`;
            document.querySelector('#basket').appendChild(span);
            document.querySelector('#buy').disabled = false;
        }
    } else if (FRM.sort.value === 'cola') {
        if (count > MODULE.getCola()) {
            ALERT_MESSAGE.textContent = `На складі немає стільки коли `
            ALERT.style.visibility = 'visible';
        } else {
            MODULE.addC(Number(count));
            span.textContent = `Кола: ${count} шт`;
            document.querySelector('#basket').appendChild(span);
            document.querySelector('#buy').disabled = false;
        }
    }
    document.querySelector('#count').value = '';
})

document.querySelector('#buy').addEventListener('click', function () {
    MODULE.buy();
    document.querySelector('#ticket').innerHTML = '';
    let prod = document.querySelector('#basket').childNodes;
    for (let i = 0; i < prod.length; i++) {
        let span = document.createElement('span');
        span.textContent = prod[i].textContent;
        document.querySelector('#ticket').appendChild(span);
    }

    let span = document.createElement('span');
    span.textContent = `Всього: ${MODULE.getBalance()} грн`
    document.querySelector('#ticket').appendChild(span);
    document.querySelector('#basket').innerHTML = '';


    document.querySelector('#balance').value = MODULE.allPrice();
    document.querySelector('#vino').value = MODULE.getVino();
    document.querySelector('#beer').value = MODULE.getBeer();
    document.querySelector('#cola').value = MODULE.getCola();
    document.querySelector('#buy').disabled = true;

})

document.querySelector('#alertButton').addEventListener('click', () => {
    ALERT.style.visibility = 'hidden';
})