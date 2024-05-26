
const repeatedString = function(x, q){
    let str = "";
    for (let i = 0 ; i < q ; i++){
        str = str + x;
    }
    return str;
}

console.log(repeatedString("geeksforgeeks", 3))