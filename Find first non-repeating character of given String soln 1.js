const firstNonRepeatingChar = function (str){
    let left = 0;
    const charMap = new Map();
    for (; left < str.length; left++){
        if (charMap.has(str[left])){
            let [location, count] = charMap.get(str[left]);
            charMap.set(str[left], [location, count + 1]);
        } else {
            charMap.set(str[left], [left, 1]);
        }
    }

    for (const [key, value] of charMap.entries()) {
        if (value[1] === 1) {
            return key;
        }
    }
    return -1
}

console.log(firstNonRepeatingChar("geekforgeeks"));
console.log(firstNonRepeatingChar("g"));
console.log(firstNonRepeatingChar("gk"));
console.log(firstNonRepeatingChar("gg"));