// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency==0) return {};
    if(currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    let result={};
    let buf=currency;
    if(buf>=50){
        result.H = Math.floor(buf/50);
        buf=buf-result.H * 50;
    }
    if(buf>=25){
        result.Q = Math.floor(buf/25);
        buf=buf-result.Q*25;
    }
    if(buf>=10){
        result.D = Math.floor(buf/10);
        buf = buf-result.D*10;
    }
    if(buf>=5){
        result.N = Math.floor(buf/5);
        buf = buf-result.N*5;
    }
    if(buf>=1){
        result.P = Math.floor(buf);
    }
    return result;
}
