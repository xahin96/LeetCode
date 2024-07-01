var addBinary = function(a, b) {
    let res = '';
    let carry = 0;
    let lendiff = Math.abs(a.length - b.length)
    if(a.length > b.length) b = '0'.repeat(lendiff) + b;
    else if(a.length < b.length) a = '0'.repeat(lendiff) + a;

    for(i = a.length - 1 ; i >= 0 ; i --){
        if((a[i] === '0' && b[i] === '1') || (a[i] === '1' && b[i] === '0')){
            if(carry === 0){
                res = '1' + res;
                carry = 0;
            } else {
                res = '0' + res;
                carry = 1;
            }
        } else if(a[i] === '0' && b[i] === '0'){
            if(carry === 0) res = '0' + res;
            else res = '1' + res;
            carry = 0;
        } else if(a[i] === '1' && b[i] === '1' && carry === 0){
            res = '0' + res;
            carry = 1;
        } else if(a[i] === '1' && b[i] === '1' && carry === 1){
            res = '1' + res;
            carry = 1;
        }
    }
    if(carry === 1) res = '1' + res;
    return res;
};