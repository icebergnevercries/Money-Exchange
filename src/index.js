module.exports = function makeExchange(currency) {
    const namesCoin = ['H', 'Q', 'D', 'N', 'P'];
    const valOfCoins = [50, 25, 10, 5, 1];
    let arrayCoins = {};

    if(currency <= 0)
    {
        return [];
    }

    if(currency >= 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    for(let i = 0; i < 5; i++)
    {
        let massCurrEx = currencyExchange(valOfCoins[i], currency);
        if(massCurrEx[0]!=0){
            arrayCoins[namesCoin[i]] = massCurrEx[0];
            currency = massCurrEx[1];
        }                 
    }

    function currencyExchange (value, currency){
        let count = 0;
        while(currency / value >= 1){
            currency -= value;
            count++;
        }
        return [count, currency];
    }

    return arrayCoins;
}
