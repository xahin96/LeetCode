/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    debugger;
    const vowels = new Set(
        ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    );
    let left = 0;
    let right = s.length -1;
    let ss = s;
    for(let i = 0 ; i < s.length ; i++){
        if(left < right){
            if(vowels.has(s[left]) && vowels.has(s[right])){
                let chars = ss.split('');
                let temp = chars[left];
                chars[left] = chars[right];
                chars[right] =  temp;
                ss = chars.join('');
                left++;
                right--;
            } else if (vowels.has(s[left]) && !vowels.has(s[right])){
                right--;
            } else if (!vowels.has(s[left]) && vowels.has(s[right])){
                left++;
            } else {
                left++;
                right--;
            }
        }
    }
    return ss;
};



// console.log(reverseVowels("hello"));
// console.log(reverseVowels("leetcode"));
// console.log(reverseVowels("ai"));
console.log(reverseVowels("race a car"));