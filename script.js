let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let billAmount1 = document.querySelector('#billAmount1');
    let cashGiven1 = document.querySelector('#cashGiven1');

    console.log(billAmount1.value);
    console.log(cashGiven1.value);

    if (billAmount1.value == '' || cashGiven1.value == '') {
        console.log('Invalid Input');

        document.querySelector('#NoOf2000').innerHTML = 0;
        document.querySelector('#NoOf500').innerHTML = 0;
        document.querySelector('#NoOf100').innerHTML = 0;
        document.querySelector('#NoOf20').innerHTML = 0;
        document.querySelector('#NoOf10').innerHTML = 0;
        document.querySelector('#NoOf5').innerHTML = 0;
        document.querySelector('#NoOf1').innerHTML = 0;

        return;
    }

    // let billAmount = 243;
    // let cashGiven = 2000;

    let billAmount = parseInt(billAmount1.value);
    let cashGiven = parseInt(cashGiven1.value);

    console.log(billAmount);
    console.log(cashGiven);

    let change = cashGiven - billAmount; //1757

    let currencies = [2000, 500, 100, 20, 10, 5, 1];
    let currenciesCount = [0, 0, 0, 0, 0, 0, 0];

    if (billAmount < 0 || cashGiven < 0 || billAmount > cashGiven) {
        console.log('Invalid Input');

        document.querySelector('#NoOf2000').innerHTML = 0;
        document.querySelector('#NoOf500').innerHTML = 0;
        document.querySelector('#NoOf100').innerHTML = 0;
        document.querySelector('#NoOf20').innerHTML = 0;
        document.querySelector('#NoOf10').innerHTML = 0;
        document.querySelector('#NoOf5').innerHTML = 0;
        document.querySelector('#NoOf1').innerHTML = 0;

        return;
    }

    let i = 0;

    while (change != 0) {
        if (change - currencies[i] >= 0) {
            change = change - currencies[i];
            currenciesCount[i]++;
            console.log(change);
        } else i++;
    }

    i = 0;

    document.querySelector('#NoOf2000').innerHTML = currenciesCount[i];
    document.querySelector('#NoOf500').innerHTML = currenciesCount[++i];
    document.querySelector('#NoOf100').innerHTML = currenciesCount[++i];
    document.querySelector('#NoOf20').innerHTML = currenciesCount[++i];
    document.querySelector('#NoOf10').innerHTML = currenciesCount[++i];
    document.querySelector('#NoOf5').innerHTML = currenciesCount[++i];
    document.querySelector('#NoOf1').innerHTML = currenciesCount[++i];
});
