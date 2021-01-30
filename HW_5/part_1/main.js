function counter() {
    let lnum = 0;
    return function (sum) {
        lnum += sum;
        console.log(lnum);
    }
}

let start = counter();

start(3);
start(5);
start(228);