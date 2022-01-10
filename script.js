let btn = document.querySelector('#btn');

const alterValues = (currenciesCount) => {
    let i = 0;

    document.querySelector('#NoOf2000').innerHTML = currenciesCount[i];
    document.querySelector('#NoOf500').innerHTML = currenciesCount[++i];
    document.querySelector('#NoOf100').innerHTML = currenciesCount[++i];
    document.querySelector('#NoOf20').innerHTML = currenciesCount[++i];
    document.querySelector('#NoOf10').innerHTML = currenciesCount[++i];
    document.querySelector('#NoOf5').innerHTML = currenciesCount[++i];
    document.querySelector('#NoOf1').innerHTML = currenciesCount[++i];
};

btn.addEventListener('click', function () {
    let currencies = [2000, 500, 100, 20, 10, 5, 1];
    const currenciesCount = [0, 0, 0, 0, 0, 0, 0];
    // let billAmount = 243;
    // let cashGiven = 2000;

    const billAmount1 = document.querySelector('#billAmount1').value;
    const cashGiven1 = document.querySelector('#cashGiven1').value;

    console.log(billAmount1);
    console.log(cashGiven1);

    // ------------------------------------------------------------

    if (billAmount1 == '' || cashGiven1 == '') {
        console.log('Invalid Input');
        alterValues(currenciesCount);
        return;
    }

    const billAmount = parseInt(billAmount1);
    const cashGiven = parseInt(cashGiven1);

    console.log(billAmount);
    console.log(cashGiven);

    // ------------------------------------------------------------

    let change = cashGiven - billAmount; //1757

    if (billAmount < 0 || cashGiven < 0 || billAmount > cashGiven) {
        console.log('Invalid Input');
        alterValues(currenciesCount);
        return;
    }

    // ------------------------------------------------------------

    let i = 0;
    while (change != 0) {
        if (change - currencies[i] >= 0) {
            change -= currencies[i];
            currenciesCount[i]++;
            console.log(change);
        } else i++;
    }

    alterValues(currenciesCount);
});
