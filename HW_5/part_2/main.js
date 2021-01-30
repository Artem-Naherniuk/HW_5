const MODULE = (function () {
    let _vinePrice = 60;
    let _beerPrise = 30;
    let _colaPrice = 10;
    let balance = 0; //тут має бути _ спочатку
    let vinePCSAll = 100; //тут має бути _ спочатку
    let beerPCSAll = 150; //тут має бути _ спочатку
    let colaPCSAll = 200; //тут має бути _ спочатку
    let vinePCS = 0; //тут має бути _ спочатку
    let beerPCS = 0; //тут має бути _ спочатку
    let colaPCS = 0; //тут має бути _ спочатку

    function look() {
        if (vinePCSAll > 0 && beerPCSAll > 0 && colaPCSAll > 0) {
            console.log(' ----------Товари--------- ');
            console.log('вино: ' + vinePCSAll + ' шт');
            console.log('пиво: ' + beerPCSAll + ' шт');
            console.log('кола: ' + colaPCSAll + ' шт');
            console.log(' ----------Товари--------- ');
        } else {
            console.log('Якийсь з вибраних вами товарів закінчився, можливо ви виберете щось інше?)');
        }
    }

    function addV(v) {
        vinePCS += v;
        if (vinePCSAll - vinePCS <= 0) {
            console.log('Товар закінчився');
        } else {
            return vinePCS;
        }

    }

    function addB(b) {
        beerPCS += b;
        if (beerPCSAll - beerPCS <= 0) {
            console.log('Товар закінчився');
        } else {
            return beerPCS;
        }
    }

    function addC(c) {
        colaPCS += c;
        if (colaPCSAll - colaPCS <= 0) {
            console.log('Товар закінчився');
        } else {
            return colaPCS;
        }

    }

    function buy() {
        vinePCSAll -= vinePCS;
        beerPCSAll -= beerPCS;
        colaPCSAll -= colaPCS;
        if (vinePCSAll > 0 && beerPCSAll > 0 && colaPCSAll > 0) {
            balance = colaPCS * _colaPrice + beerPCS * _beerPrise + vinePCS * _vinePrice;
            console.log(balance + ' грн');
        } else {
            console.log('ТОВАР ЗАКІНЧИВСЯ!!!!');
        }
        vinePCS = 0;
        beerPCS = 0;
        colaPCS = 0;
    }

    function basket(){
        if (vinePCSAll - vinePCS <= 0 && beerPCSAll - beerPCS <= 0 && colaPCSAll - colaPCS <= 0) {
            console.log(' ----------Корзина--------- ');
            console.log('вино: ' + vinePCS + ' шт');
            console.log('пиво: ' + beerPCS + ' шт');
            console.log('кола: ' + colaPCS + ' шт');
            console.log(' ----------Корзина--------- ');
        } else {
            console.log('Якийсь з вибраних вами товарів закінчився, можливо ви виберете щось інше?)');
        }
    }

    return {
        addV: addV,
        addB: addB,
        addC: addC,
        buy: buy,
        look: look,
        basket: basket,
    }

}());

MODULE.look();

MODULE.addV(10);
MODULE.addB(3);

MODULE.basket();

MODULE.buy();


MODULE.look();

MODULE.addV(6);
MODULE.addB(4);
MODULE.addC(3);

MODULE.basket();

MODULE.buy();

MODULE.look();

MODULE.addV(100);
MODULE.addB(4);
MODULE.addC(3);

MODULE.basket();

MODULE.buy();

